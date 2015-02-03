
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Artemis Glitter' })
};


/*
 * GET debug map.
 */
exports.map = function(req, res){
	res.render('map', { title: 'Debug Map - Artemis Glitter' });
};


/*
 * GET Bearings and Distances table.
 */
exports.bearingTable = function(req, res){
	res.render('bearing-table', { title: 'Bearing Table - Artemis Glitter' });
};


/*
 * GET Proximity monitor.
 */
exports.proximity = function(req, res){
	res.render('proximity', { title: 'Proximity Monitor - Artemis Glitter' });
};


/*
 * GET torpedo tubes screen.
 */
exports.tubes = function(req, res){
	res.render('tubes', { title: 'Torpedo Tubes - Artemis Glitter' });
};


/*
 * GET Internal comms screen.
 */
exports.intcomms = function(req, res){
	res.render('intcomms', { title: 'Internal Comms - Artemis Glitter' });
};

/*
 * GET Captains display matrix.
 */
exports.captab = function(req, res){
	res.render('captab', { title: 'Captains display matrix - Artemis Glitter' });
};
