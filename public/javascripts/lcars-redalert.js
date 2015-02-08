// Changes some CSS classes to turn things red whenever the player vessel switches the "red alert" status.


iface.on('playerUpdate',function(data) {
	
	if (data.id == model.playerShipID
	    && data.hasOwnProperty('redAlert')) {
		
		if (data.redAlert) {
		$(".btnBlue1").removeClass("btnBlue1").addClass("btnRed1");
		$(".btnBlue2").removeClass("btnBlue2").addClass("btnRed2");
		$("#menu-curve-a").addClass("btnCollapse");
		$("#menu-curve-a-red").removeClass("btnCollapse");
		$("#menu-bar1").addClass("btnCollapse");
		$("#menu-bar1-red").removeClass("btnCollapse");
		$("#long-bar1").addClass("btnCollapse");
		$("#long-bar1-red").removeClass("btnCollapse");
		$("#short-bar1").addClass("btnCollapse");
		$("#short-bar1-red").removeClass("btnCollapse");
		$("#short-bar2").addClass("btnCollapse");
		$("#short-bar2-red").removeClass("btnCollapse");
		$("#short-bar3").addClass("btnCollapse");
		$("#short-bar3-red").removeClass("btnCollapse");
		} else {
		$(".btnRed1").removeClass("btnRed1").addClass("btnBlue1");
		$(".btnRed2").removeClass("btnRed2").toggleClass("btnBlue2");
		$("#menu-curve-a").removeClass("btnCollapse");
		$("#menu-curve-a-red").addClass("btnCollapse");
		$("#menu-bar1").removeClass("btnCollapse");
		$("#menu-bar1-red").addClass("btnCollapse");
		$("#long-bar1").removeClass("btnCollapse");
		$("#long-bar1-red").addClass("btnCollapse");
		$("#short-bar1").removeClass("btnCollapse");
		$("#short-bar1-red").addClass("btnCollapse");
		$("#short-bar2").removeClass("btnCollapse");
		$("#short-bar2-red").addClass("btnCollapse");
		$("#short-bar3").removeClass("btnCollapse");
		$("#short-bar3-red").addClass("btnCollapse");
		}
	}
	
});

