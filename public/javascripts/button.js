$(function() {
	$("#shuttle1button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttle1button2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttle1button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button2");
		//alert("Button Click 4");
	});
	
	$("#shuttle1button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#shuttle2button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttle2button2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttle2button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button4").removeClass("btnCollapse");
		//alert("Button Click 3");
	});
	
	$("#shuttle2button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#shuttle3button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttle3button2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttle3button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button4").removeClass("btnCollapse");
		//alert("Button Click 3");
	});
	
	$("#shuttle3button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#shuttle4button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttle4button2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttle4button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button4").removeClass("btnCollapse");
		//alert("Button Click 3");
	});
	
	$("#shuttle4button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#shuttle5button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttle5button2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttle5button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button4").removeClass("btnCollapse");
		//alert("Button Click 3");
	});
	
	$("#shuttle5button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#shuttleallbutton1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttleallbutton2").removeClass("btnCollapse").addClass("animatedflash flash");
		$("#shuttle1button1").addClass("btnCollapse");
		$("#shuttle1button2").removeClass("btnCollapse").addClass("animatedflash flash");
		$("#shuttle2button1").addClass("btnCollapse");
		$("#shuttle2button2").removeClass("btnCollapse").addClass("animatedflash flash");
		$("#shuttle3button1").addClass("btnCollapse");
		$("#shuttle3button2").removeClass("btnCollapse").addClass("animatedflash flash");
		$("#shuttle4button1").addClass("btnCollapse");
		$("#shuttle4button2").removeClass("btnCollapse").addClass("animatedflash flash");
		$("#shuttle5button1").addClass("btnCollapse");
		$("#shuttle5button2").removeClass("btnCollapse").addClass("animatedflash flash");
		//alert("Button Click 1");
	});
	
	$("#shuttleallbutton2").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttleallbutton3").removeClass("btnCollapse");
		$("#shuttle1button2").addClass("btnCollapse");
		$("#shuttle1button3").removeClass("btnCollapse");
		$("#shuttle2button2").addClass("btnCollapse");
		$("#shuttle2button3").removeClass("btnCollapse");
		$("#shuttle3button2").addClass("btnCollapse");
		$("#shuttle3button3").removeClass("btnCollapse");
		$("#shuttle4button2").addClass("btnCollapse");
		$("#shuttle4button3").removeClass("btnCollapse");
		$("#shuttle5button2").addClass("btnCollapse");
		$("#shuttle5button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	});
	
	$("#shuttleallbutton3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttleallbutton4").removeClass("btnCollapse");
		$("#shuttle1button3").addClass("btnCollapse");
		$("#shuttle1button4").removeClass("btnCollapse");
		$("#shuttle2button3").addClass("btnCollapse");
		$("#shuttle2button4").removeClass("btnCollapse");
		$("#shuttle3button3").addClass("btnCollapse");
		$("#shuttle3button4").removeClass("btnCollapse");
		$("#shuttle4button3").addClass("btnCollapse");
		$("#shuttle4button4").removeClass("btnCollapse");
		$("#shuttle5button3").addClass("btnCollapse");
		$("#shuttle5button4").removeClass("btnCollapse");
		//alert("Button Click 3");
	});
	
	$("#shuttleallbutton4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttleallbutton1").removeClass("btnCollapse animated fadeInLeft");
		$("#shuttle1button4").addClass("btnCollapse");
		$("#shuttle1button1").removeClass("btnCollapse animated fadeInLeft");
		$("#shuttle2button4").addClass("btnCollapse");
		$("#shuttle2button1").removeClass("btnCollapse animated fadeInLeft");
		$("#shuttle3button4").addClass("btnCollapse");
		$("#shuttle3button1").removeClass("btnCollapse animated fadeInLeft");
		$("#shuttle4button4").addClass("btnCollapse");
		$("#shuttle4button1").removeClass("btnCollapse animated fadeInLeft");
		$("#shuttle5button4").addClass("btnCollapse");
		$("#shuttle5button1").removeClass("btnCollapse animated fadeInLeft");
		//alert("Button Click 4");
	});
	
	$("#RedAlertTrigger").click(function() {
		$(".button").toggleClass("btnBlue1 btnBlue2 btnBlue1down btnBlue2down");
		$(".button").toggleClass("btnRed1 btnRed2 btnRed1down btnRed2down");
	});
});
