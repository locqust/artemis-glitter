exports.name = 'Keystroke';

exports.type = 0x4c821d3c;

exports.subtype = 0x14;
exports.subtypeLength = 4;	// 4 bytes -> UInt32LE

exports.pack = function(writer, data) {
	writer.writeLong(data.key);
}

exports.unpack = null;	// Only from client to server