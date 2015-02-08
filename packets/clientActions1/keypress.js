exports.name = 'sendKeystroke';

exports.type = 0x4c821d3c;

exports.subtype = 0x14;
exports.subtypeLength = 4;	// 4 bytes -> UInt32LE

exports.pack = function(writer, e) {
	writer.writeLong(2);
	console.log(e)
}

exports.unpack = null;	// Only from client to server




//sendKeyStroke: {
	//	type: 0x4c821d3c,
	//	subtypeLength: 4,
	//	subtype: 0x14,	// 20
	//	fields: new type.struct({
			// See http://msdn.microsoft.com/en-us/library/aa243025.aspx
	//		keyCode:  type.int32	// Object ID
	//	})
	//},
	
	
	
	// Redo the table, with the int32 types pointing to a structure holding
//   the subtype lenght and refs to the packet defs.
// This way we can access packet defs by their int32 type + subtype.

//var packetDefsByType = {};

//for (var name in packetDefsByName) {
	
	//var type    = packetDefsByName[name].type;
	//var subtype = packetDefsByName[name].subtype;
	//var fields  = packetDefsByName[name].fields;
	
	//if (!packetDefsByType.hasOwnProperty( type )) {
	//	packetDefsByType[type] = {
	//		subtypeLength: packetDefsByName[name].subtypeLength
	//	}
	//}
	
	//packetDefsByType[type][subtype] = {name: name, fields: fields};
	
//}

//console.log(packetDefsByType);



//module.exports = {
//	packetDefsByType: packetDefsByType,
//	packetDefsByName: packetDefsByName
//};