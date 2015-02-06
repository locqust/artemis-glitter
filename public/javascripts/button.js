$(function() {
	
	$("#shuttle1button1").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button2").removeClass("btnCollapse").addClass("animatedflash flash");
		setTimeout(function() {
			$("#shuttle1button2").addClass("btnCollapse");
			$("#shuttle1button3").removeClass("btnCollapse");
			var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'voice/keyok4.ogg');
     audio.appendTo('body');
		}, 20000);
		//alert("Button Click 1");
	});
	
	//$("#shuttle1button2").click(function() {
		//$(this).addClass("btnCollapse");
		//$("#shuttle1button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
	$("#shuttle1button3").click(function() {
		$(this).addClass("btnCollapse");
		$("#shuttle1button4").removeClass("btnCollapse");
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
	
	//$("#shuttle2button2").click(function() {
	//	$(this).addClass("btnCollapse");
	//	$("#shuttle2button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
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
	
	//$("#shuttle3button2").click(function() {
	//	$(this).addClass("btnCollapse");
	//	$("#shuttle3button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
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
	
	//$("#shuttle4button2").click(function() {
	//	$(this).addClass("btnCollapse");
	//	$("#shuttle4button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
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
	
	//$("#shuttle5button2").click(function() {
	//	$(this).addClass("btnCollapse");
	//	$("#shuttle5button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
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
	
	//$("#shuttleallbutton2").click(function() {
	//	$(this).addClass("btnCollapse");
	//	$("#shuttleallbutton3").removeClass("btnCollapse");
	//	$("#shuttle1button2").addClass("btnCollapse");
	//	$("#shuttle1button3").removeClass("btnCollapse");
	//	$("#shuttle2button2").addClass("btnCollapse");
	//	$("#shuttle2button3").removeClass("btnCollapse");
	//	$("#shuttle3button2").addClass("btnCollapse");
	//	$("#shuttle3button3").removeClass("btnCollapse");
	//	$("#shuttle4button2").addClass("btnCollapse");
	//	$("#shuttle4button3").removeClass("btnCollapse");
	//	$("#shuttle5button2").addClass("btnCollapse");
	//	$("#shuttle5button3").removeClass("btnCollapse");
		//alert("Button Click 2");
	//});
	
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
	
	$("#abandonship1").click(function() {
		$(this).addClass("btnCollapse");
		$("#abandonship2").removeClass("btnCollapse");
		$("#selfdestruct1").removeClass("btnCollapse");
		//alert("Button Click abandon");
	});
	
	$("#abandonship2").click(function() {
		$(this).addClass("btnCollapse");
		$("#abandonship1").removeClass("btnCollapse");
		$("#selfdestruct1").addClass("btnCollapse");
		$("#selfdestruct2").addClass("btnCollapse");
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
		$("#transporter1").removeClass("btnCollapse");
		$("#alertmeds").addClass("btnCollapse");
		$("#alertmeds2").addClass("btnCollapse");
		$("#notifyship1").addClass("btnCollapse");
		$("#notifyship2").addClass("btnCollapse");
		$("#awayteam1").addClass("btnCollapse");
		$("#awayteam2").addClass("btnCollapse");
		$("#chips").removeClass("btnCollapse");
		$("#monkey").removeClass("btnCollapse");
	});
});