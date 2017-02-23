window.addEventListener("keydown", ArrowKeys, false); 
var pages = ["thesis.html","aspiration.html","journey.html","application.html",	
			 "information.html","repetoire.html","../index.html"];
var x = 0;
var y = 0;
var z = window.location.href;
console.log(z);

	function CheckUrl() {
		if (z == "http://www.tajairi.com/HTML/thesis.html") {
			x = 1;
		}
		else if (z == "http://www.tajairi.com/HTML/aspiration.html") {
			x = 2;
			y = 0;
		}
		else if(z =="http://www.tajairi.com/HTML/journey.html") {
			x = 3;
			y = 1;
		}
		else if(z =="http://www.tajairi.com/HTML/application.html") {
			x = 4;
			y = 2;
		}
		else if(z =="http://www.tajairi.com/HTML/information.html") {
			x = 5;
			y = 3;
		}
		else if(z =="http://www.tajairi.com/HTML/repetoire.html") {
			x = 6;
			y = 4;
		}
	}
 	function ArrowKeys(e) {
   		if (e.keyCode == "39") {
		CheckUrl();
		window.location = pages[x];
		console.log(window.location);
   		}
   		else if(e.keyCode == "37"){
   		CheckUrl();
		window.location = pages[y];
		console.log(window.location);
   		}
	}