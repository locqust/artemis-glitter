

// Prepare styles for map
// Right now it's one style per object type (see docs about enums):
//     0x01: player ship
//     0x02: weapons bridge station
//     0x03: engineering bridge station
//     0x04: other ship (enemy or civilian)
//     0x05: space station
//     0x06: mine
//     0x07: anomaly
//     0x09: nebula
//     0x0a: torpedo
//     0x0b: black hole
//     0x0c: asteroid
//     0x0d: generic mesh
//     0x0e: monster
//     0x0f: whale
//     0x10: drone



// More work needs to be done - i.e. making un-ID'ed vessels
//   appear white and color vessels depending of faction and 
//   surrender status
function getStyle(type,isEnemy,name) {

	var strokeColor = '#ffffff';
	var fillColor   = '#c0c0c0';
	var radius=5;
	if (type==1) {
		strokeColor = '#00ff00';
		fillColor   = '#40c040';
	} else if (type==4) {
		if (isEnemy) {
			strokeColor = '#ff0000';
			fillColor   = '#c04040';
		} else {
			strokeColor = '#00ffff';
			fillColor   = '#40c0c0';
		}
	} else if (type==5) {
		strokeColor = '#ffff00';	// Stations
		fillColor   = '#c0c040';
	} else if (type==6) {
		strokeColor = '#ffffff';	// Mines
		fillColor   = '#666666';
		radius = 2;
	} else if (type==9) {
		strokeColor = [0xff,0x00,0xff,.05];	// Nebulae
		fillColor   = [0xc0,0x40,0xc0,.2];
		radius = 15;
	} else if (type==11) {
		strokeColor = '#404040';	// Black hole
		fillColor   = '#000000';
		radius = 15;
	} else if (type==12) {
		strokeColor = '#ffbf80';	// Asteroid
		fillColor   = '#c06640';
	} else if (type==15) {
		strokeColor = '#00ff80';	// Space Whales
		fillColor   = '#40c080';
	} else if (type==16) {
		strokeColor = '#ffffff';	// Drone
		fillColor   = '#666666';
	} else if (type==-1) {
		strokeColor = '#ffffff';	// Beam
		fillColor   = '#666666';
		radius = 1;
	} else if (type==-4) {
		strokeColor = '#ffffff';	// cloakingFlash
		fillColor   = '#ffffff';
		radius = 2;
	}

	if (name) {
		return [new ol.style.Style({
			image: new ol.style.Circle({
				radius: radius,
				fill: new ol.style.Fill({color: fillColor}),
				stroke: new ol.style.Stroke({color: strokeColor, width: 1})
			}),
			text: new ol.style.Text({
				font: '12px Xolonium,sans-serif',
				text: name,
				fill: new ol.style.Fill({color: fillColor}),
				stroke: new ol.style.Stroke({color: strokeColor,width: 0.5}),
				offsetY: -13
			})
		})];
	} else {
		return [new ol.style.Style({
			image: new ol.style.Circle({
				radius: radius,
				fill: new ol.style.Fill({color: fillColor}),
				stroke: new ol.style.Stroke({color: strokeColor, width: 1})
			})
		})];	
	}
};



// Prepare fake projection for map
var artemisProjection = new ol.proj.Projection({
  code: 'meters',
  units: 'm',
  extent: [0, 0, 100000, 100000]
//   ,axisOrientation: 'enu'
//   ,axisOrientation: 'wsu'
//   ,axisOrientation: 'esu'	// Doesn't really seem to work with current OL3.
});


// Prepare popup <div>
var popup = new ol.Overlay({
  element: document.getElementById('popup')
});


// Prepare vector layer
var vectorSource = new ol.source.Vector({
  features: []
});
var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: function(feature, resolution) {
	return getStyle(feature.get('type'), feature.get('isEnemy'), feature.get('name'));
  }
});


// Mouse position control
var mousePositionControl = new ol.control.MousePosition({
  coordinateFormat: function(ll){ 
    var x = 100000 - ll[0];
    var y = 100000 - ll[1];
    return x.toFixed(0) + ', ' + y.toFixed(0);
  },
  projection: artemisProjection,
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'custom-mouse-position',
  target: document.getElementById('mouse-position'),
  undefinedHTML: '&nbsp;'
});



// Init map
var map = new ol.Map({
  layers: [
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '/images/map_background_601px.png',
        imageSize: [601, 601],
        projection: artemisProjection,
        imageExtent: artemisProjection.getExtent()
      })
    }),
    vectorLayer
  ],
  renderer: 'canvas',
  target: 'map',
  view: new ol.View({
    projection: artemisProjection,
    center: ol.extent.getCenter(artemisProjection.getExtent()),
    zoom: 1
  }),
  controls: ol.control.defaults()
	.extend([mousePositionControl])
});




// Hook up events to world model so we can draw/mode vector 
//   features when entities appear/move

function addOrUpdateMapEntity(data) {
	var id = data.id;
	if (!data.hasOwnProperty('posX') || !data.hasOwnProperty('posZ')) {
		return;
	}

	/// FIXME: We should be using the native coordinates with the OL3 projection's axisOrientation instead of hacking the coords here.
	var geom = new ol.geom.Point([100000 - data.posX, 100000 - data.posZ]);
// 	var geom = new ol.geom.Point([data.posX, data.posZ]);
	
	var entity = model.entities[id];
	
	if (!entity.hasOwnProperty('ol3Feature')) {
		/// FIXME: Add HDG, surrender status.
		var feat = entity.ol3Feature = new ol.Feature({
		    'geometry': geom,
		    'id': data.id,
		    'type': data.entityType,
		    'name': data.shipName,
		    'isEnemy': data.isEnemy
		});
		
		vectorSource.addFeature(feat);
	} else {
		/// FIXME: Update also name, HDG, surrender status.
		entity.ol3Feature.setGeometry(geom);
	}
}

model.on('newEntity', addOrUpdateMapEntity);

model.on('updateEntity', addOrUpdateMapEntity);

model.on('destroyEntity', function(data){
// 	console.log('Destroyed entity in world model: ', data);
	try {
		vectorSource.removeFeature(model.entities[data.id].ol3Feature);
	} catch(e) {
		console.warn('Tried to remove non-existing feature from map, ', data);
	}
});






// Aux functions for "select feature" functionality
// Basically watch any changes in the world model related to the
//   entity with ID = selectedFeatureID
var selectedFeatureID = null;

function clearData() {
	document.getElementById('vesselData').innerHTML = '';
}

function isFloat(n) {
    return n === +n && n !== (n|0);
}

function showData(id) {
	var str = '';
	
	for (key in model.entities[id]) {
		var val = model.entities[id][key];
		str += '<tr><td>' + key;
		if (isFloat(val)) {
			str += '<td>' + val.toPrecision(10);
		} else {
			str += '<td style="text-overflow:ellipsis; white-space:no-break">' + val;
		}
	}
	
	document.getElementById('vesselData').innerHTML = '<table>' + str + '</table>';
}

model.on('updateEntity', function(data){
	if (data.id == selectedFeatureID) {showData(data.id);}
});

// "Select feature" functionality

var displayFeatureInfo = function(pixel) {

	var feature = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
		return feature;
	});

	if (!feature) {
		selectedFeatureID = null;
		clearData();
		return;
	}
	
	selectedFeatureID = feature.get('id');
// 	console.log(feature);
// 	console.log(selectedFeatureID);

	showData(selectedFeatureID);
};

map.on('singleclick', function(evt) {
  displayFeatureInfo(evt.pixel);
});


