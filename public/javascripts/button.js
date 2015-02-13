$(function() {
	
	$("#shuttle1button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button2").removeClass("btnCollapse").addClass("animatedflash flash");
	//var keyCode = jQuery.Event("keypress");
     var keyCode = (97);
  //  $("shuttle1button1").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
			$("#shuttle1button2").addClass("btnCollapse");
			$("#shuttle1button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);
	});
	
	$("#shuttle1button3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
		var keyCode = (97);
  //  $("shuttle1button3").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
		$("#shuttle1button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle1button3").addClass("btnCollapse");
		$("#shuttle1button4").removeClass("btnCollapse");
		//alert("Button Click 4");
		}, 3000);
	});
	
	$("#shuttle1button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button1").removeClass("btnCollapse animated fadeInLeft");
		var keyCode = (97);
  //  $("shuttle1button4").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		//alert("Button Click 4");
	});
	
	$("#shuttle2button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button2").removeClass("btnCollapse").addClass("animatedflash flash");
		var keyCode = (98);
  //  $("shuttle2button1").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
			$("#shuttle2button2").addClass("btnCollapse");
			$("#shuttle2button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);	
	//alert("Button Click 1");
	});
	
	$("#shuttle2button3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
		var keyCode = (98);
  //  $("shuttle2button3").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
		$("#shuttle2button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle2button3").addClass("btnCollapse");
		$("#shuttle2button4").removeClass("btnCollapse");
		//alert("Button Click 4");
		}, 3000);
	});
	
	$("#shuttle2button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle2button1").removeClass("btnCollapse animated fadeInLeft");
		var keyCode = (98);
  //  $("shuttle2button4").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		//alert("Button Click 4");
	});
	
	$("#shuttle3button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button2").removeClass("btnCollapse").addClass("animatedflash flash");
		var keyCode = (99);
  //  $("shuttle3button1").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
			$("#shuttle3button2").addClass("btnCollapse");
			$("#shuttle3button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);
		//alert("Button Click 1");
	});
	
	$("#shuttle3button3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
		var keyCode = (99);
  //  $("shuttle3button3").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
		$("#shuttle3button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle3button3").addClass("btnCollapse");
		$("#shuttle3button4").removeClass("btnCollapse");
		//alert("Button Click 4");
		}, 3000);
	});
	
	$("#shuttle3button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle3button1").removeClass("btnCollapse animated fadeInLeft");
		var keyCode = (99);
  //  $("shuttle3button4").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		//alert("Button Click 4");
	});
	
	$("#shuttle4button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button2").removeClass("btnCollapse").addClass("animatedflash flash");
		var keyCode = (100);
  //  $("shuttle4button1").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
			$("#shuttle4button2").addClass("btnCollapse");
			$("#shuttle4button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);
		//alert("Button Click 1");
	});
	
	$("#shuttle4button3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
			var keyCode = (100);
  //  $("shuttle4button3").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
		$("#shuttle4button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle4button3").addClass("btnCollapse");
		$("#shuttle4button4").removeClass("btnCollapse");
		//alert("Button Click 4");
		}, 3000);
	});
	
	$("#shuttle4button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle4button1").removeClass("btnCollapse animated fadeInLeft");
			var keyCode = (100);
  //  $("shuttle4button4").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		//alert("Button Click 4");
	});
	
	$("#shuttle5button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button2").removeClass("btnCollapse").addClass("animatedflash flash");
			var keyCode = (101);
  //  $("shuttle5button1").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
			$("#shuttle5button2").addClass("btnCollapse");
			$("#shuttle5button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);
		//alert("Button Click 1");
	});
	
	$("#shuttle5button3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
			var keyCode = (101);
  //  $("shuttle5button3").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
		setTimeout(function() {
		$("#shuttle5button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle5button3").addClass("btnCollapse");
		$("#shuttle5button4").removeClass("btnCollapse");
		//alert("Button Click 4");
		}, 3000);
	});
	
	$("#shuttle5button4").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle5button1").removeClass("btnCollapse animated fadeInLeft");
			var keyCode = (101);
  //  $("shuttle5button4").trigger(keyCode);
	console.log("key " + keyCode  + " has been pressed");
	var oReq = new XMLHttpRequest();
		oReq.open("get", "./KeystrokePacket/"+keyCode, true);
		oReq.send();
		console.log(oReq);
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
		setTimeout(function() {
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
			$("#shuttleallbutton2").addClass("btnCollapse");
			$("#shuttleallbutton3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);	
	//alert("Button Click 1");
	});
	
	$("#shuttleallbutton3").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
		$("#shuttle1button3").addClass("animatedflash3secs flash3secs");
		$("#shuttle2button3").addClass("animatedflash3secs flash3secs");
		$("#shuttle3button3").addClass("animatedflash3secs flash3secs");
		$("#shuttle4button3").addClass("animatedflash3secs flash3secs");
		$("#shuttle5button3").addClass("animatedflash3secs flash3secs");
		setTimeout(function() {
		$("#shuttleallbutton3").addClass("btnCollapse");
		$("#shuttleallbutton3").removeClass("animatedflash3secs flash3secs");
		$("#shuttleallbutton4").removeClass("btnCollapse");
		$("#shuttle1button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle1button3").addClass("btnCollapse");
		$("#shuttle1button4").removeClass("btnCollapse");
		$("#shuttle2button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle2button3").addClass("btnCollapse");
		$("#shuttle2button4").removeClass("btnCollapse");
		$("#shuttle3button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle3button3").addClass("btnCollapse");
		$("#shuttle3button4").removeClass("btnCollapse");
		$("#shuttle4button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle4button3").addClass("btnCollapse");
		$("#shuttle4button4").removeClass("btnCollapse");
		$("#shuttle5button3").removeClass("animatedflash3secs flash3secs");
		$("#shuttle5button3").addClass("btnCollapse");
		$("#shuttle5button4").removeClass("btnCollapse");
		}, 3000);
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
	
	$("#abandonship1").click(function() {
		$(this).addClass("btnCollapse");
		$("#abandonship2").removeClass("btnCollapse");
		$("#selfdestruct1").removeClass("btnCollapse");
		//alert("Button Click abandon");
	});
	
	$("#abandonship2").click(function() {
		$(this).addClass("btnCollapse");
		$("#abandonship1").removeClass("btnCollapse animated fadeInLeft");
		$("#selfdestruct1").addClass("animatedfadeoutright fadeOutRight");
		$("#selfdestruct2").addClass("animatedfadeoutright fadeOutRight");
		setTimeout(function() {
		$("#selfdestruct1").removeClass("animatedfadeoutright fadeOutRight");
		$("#selfdestruct1").addClass("btnCollapse");
		$("#selfdestruct2").removeClass("animatedfadeoutright fadeOutRight");
		$("#selfdestruct2").addClass("btnCollapse");
		}, 1000);
		//alert("Button Click abandon");
	});
	
	$("#selfdestruct1").click(function() {
		$(this).addClass("btnCollapse");
		$("#selfdestruct2").removeClass("btnCollapse");
		//alert("Button Click abandon");
	});
	
	$("#selfdestruct2").click(function() {
		$(this).addClass("btnCollapse");
		$("#selfdestruct1").removeClass("btnCollapse");
		//alert("Button Click abandon");
	});
	
	$("#transporter1").click(function() {
		$(this).addClass("btnCollapse");
		$("#chips").addClass("btnCollapse");
		$("#monkey").addClass("btnCollapse");
		$("#transporter2").removeClass("btnCollapse");
		$("#alertmeds").removeClass("btnCollapse");
		$("#notifyship1").removeClass("btnCollapse");
		$("#awayteam1").removeClass("btnCollapse");
		//alert("Button Click abandon");
	});
	
	$("#alertmeds").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
			setTimeout(function() {
			$("#alertmeds").addClass("btnCollapse");
			$("#alertmeds").removeClass("animatedflash3secs flash3secs");
			$("#alertmeds2").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 3000);
		//alert("Button Click abandon");
	});
	
		$("#notifyship1").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
			setTimeout(function() {
			$("#notifyship1").addClass("btnCollapse");
			$("#notifyship1").removeClass("animatedflash3secs flash3secs");
			$("#notifyship2").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok6.ogg');
     audio.appendTo('body');
		}, 3000);
		//alert("Button Click abandon");
	});
	
	$("#awayteam1").click(function() {
		$(this).addClass("animatedflash3secs flash3secs");
			setTimeout(function() {
			$("#awayteam1").addClass("btnCollapse");
			$("#awayteam1").removeClass("animatedflash3secs flash3secs");
			$("#awayteam2").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 3000);
		//alert("Button Click abandon");
	});
	
	$("#transporter2").click(function() {
		$(this).addClass("btnCollapse");
		$("#transporter1").removeClass("btnCollapse animated fadeInLeft");
		$("#alertmeds").addClass("animatedfadeoutright fadeOutRight");
		$("#alertmeds2").addClass("animatedfadeoutright fadeOutRight");
		$("#notifyship1").addClass("animatedfadeoutright fadeOutRight");
		$("#notifyship2").addClass("animatedfadeoutright fadeOutRight");
		$("#awayteam1").addClass("animatedfadeoutright fadeOutRight");
		$("#awayteam2").addClass("animatedfadeoutright fadeOutRight");
		setTimeout(function() {
		$("#alertmeds").removeClass("animatedfadeoutright fadeOutRight");
		$("#alertmeds").addClass("btnCollapse");
		$("#alertmeds2").removeClass("animatedfadeoutright fadeOutRight");
		$("#alertmeds2").addClass("btnCollapse");
		$("#notifyship1").removeClass("animatedfadeoutright fadeOutRight");
		$("#notifyship1").addClass("btnCollapse");
		$("#notifyship2").removeClass("animatedfadeoutright fadeOutRight");
		$("#notifyship2").addClass("btnCollapse");
		$("#awayteam1").removeClass("animatedfadeoutright fadeOutRight");
		$("#awayteam1").addClass("btnCollapse");
		$("#awayteam2").removeClass("animatedfadeoutright fadeOutRight");
		$("#awayteam2").addClass("btnCollapse");
		$("#chips").removeClass("btnCollapse");
		$("#monkey").removeClass("btnCollapse");
		}, 1000);
	});
	
		//$("#RedAlertTrigger").click(function() {
		//$(".button").toggleClass("btnBlue1").toggleClass("btnRed1");
		//$(".button").toggleClass("btnBlue2").toggleClass("btnRed2");
		//$("#menu-curve-a").toggleClass("btnCollapse");
		//$("#menu-curve-a-red").toggleClass("btnCollapse");
		//$("#menu-bar1").toggleClass("btnCollapse");
		//$("#menu-bar1-red").toggleClass("btnCollapse");
		//$("#long-bar1").toggleClass("btnCollapse");
		//$("#long-bar1-red").toggleClass("btnCollapse");
		//$("#short-bar1").toggleClass("btnCollapse");
		//$("#short-bar1-red").toggleClass("btnCollapse");
		//$("#short-bar2").toggleClass("btnCollapse");
		//$("#short-bar2-red").toggleClass("btnCollapse");
		//$("#short-bar3").toggleClass("btnCollapse");
		//$("#short-bar3-red").toggleClass("btnCollapse");
		//$(".btnRed1").toggleClass("btnRed1").toggleClass("btnBlue1");
		//$(".btnRed2").toggleClass("btnRed2").toggleClass("btnBlue2");
		//$(".button").toggleClass("btnRed1 btnRed2 btnRed1down btnRed2down");
	//});
	
});