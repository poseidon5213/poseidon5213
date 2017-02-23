window.addEventListener("keydown", ArrowKeys, false); 
nextPage = document.getElementById('Link');
var pages = ["thesis.html","aspiration.html","journey.html","application.html",+	
			 "information.html","repetoire.html","../index.html"];
var x;
var z = window.location.href;
console.log(z);

	if (z == "http://www.tajairi.com/HTML/aspiration.html") {
		x = 2;
	}
	else if(z =="http://www.tajairi.com/HTML/journey.html") {
		x = 3;
	}
	else if(z =="http://www.tajairi.com/HTML/application.html") {
		x = 4;
	}
	else if(z =="http://www.tajairi.com/HTML/information.html") {
		x = 5;
	}
	else if(z =="http://www.tajairi.com/HTML/repetoire.html") {
		x = 6;
	}
 function ArrowKeys(e) {
   if (e.keyCode == "39") {
   	window.location = pages[x];
    console.log(window.location);
   }
}