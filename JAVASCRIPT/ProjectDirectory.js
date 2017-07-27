function loadV(){   
   var pich1 = document.getElementById('pich1');
   var pich2 = document.getElementById('pich2');
   var ProjectTitle = document.getElementById('ProjectTitle');
   var ProjectImage = document.getElementById('ProjectImage');
   var ProjectDescription = document.getElementById('ProjectDescription');
   var c1 = document.getElementById('c1');
   var c2 = document.getElementById('c2');
   var c3 = document.getElementById('c3');
   var c4 = document.getElementById('c4');
   var c5 = document.getElementById('c5'); 
   c1.addEventListener('click', c1clicked);
   c2.addEventListener('click', c2clicked);
   c3.addEventListener('click', c3clicked);
   c4.addEventListener('click', c4clicked);
   c5.addEventListener('click', c5clicked);
   console.log('page loaded');
}
function c1clicked() {
	pich1.innerHTML = "School";
	pich2.innerHTML = "Chief Web Designer";
	ProjectTitle.innerHTML = "The Vitruvian";
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		ProjectImage.src = "../../IMAGES/vitruvian.png";
	}else { ProjectImage.src = "../IMAGES/vitruvian.png";
	}
	ProjectDescription.innerHTML = "In English we formed groups and created a newspaper.<br>  "+
									"My group's newspaper was named after our school's logo<br> "+
									"which was influenced by Leonardo Da Vinci's work<br> "+
									"of art of the same name. ";
	c1.className  ="circle CircleActive";
	c2.className  ="circle CircleInactive";
	c3.className  ="circle CircleInactive";
	c4.className  ="circle CircleInactive";
	c5.className  ="circle CircleInactive";
	console.log('Project 1 Loaded');
}
function c2clicked() {
	pich1.innerHTML = "Self-Project";
	pich2.innerHTML = "Sole-Developer";
	ProjectTitle.innerHTML = "Scape";
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		{ProjectImage.src = "../../IMAGES/scape.png";}
	else {ProjectImage.src = "../IMAGES/scape.png";}
	ProjectDescription.innerHTML = "My first product while learning how to use Unity and Csharp";
	c2.className  ="circle CircleActive";
	c1.className  ="circle CircleInactive";
	c3.className  ="circle CircleInactive";
	c4.className  ="circle CircleInactive";
	c5.className  ="circle CircleInactive";
	console.log('Project 2 Loaded');
}
function c3clicked() {
	pich1.innerHTML = "School";
	pich2.innerHTML = "Sole-Developer";
	ProjectTitle.innerHTML = "Challenge1";
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		{ProjectImage.src = "../../IMAGES/blink.gif";} 
	else {ProjectImage.src = "../IMAGES/blink.gif";}
	ProjectDescription.innerHTML = "Using A Raspberry Pi to get a led to blink";
	c3.className  ="circle CircleActive";
	c2.className  ="circle CircleInactive";
	c1.className  ="circle CircleInactive";
	c4.className  ="circle CircleInactive";
	c5.className  ="circle CircleInactive";
	console.log('Project 3 Loaded');
}
function c4clicked() {
	pich1.innerHTML = "School";
	pich2.innerHTML = "Sole-Developer";
	ProjectTitle.innerHTML = "Challenge2/3"; 
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		{ProjectImage.src = "../../IMAGES/challenge2-3.png";}
	else {ProjectImage.src = "../IMAGES/challenge2-3.png";}
	ProjectDescription.innerHTML = "Using A Raspberry Pi to get a led to follow a pattern and accept user input <br> <a target=none href=https:youtu.be/mnxh4EyB7_A style= color:#FE6F43>View Demonstration  </a> <br> <a target=none href=../PYTHON/jt.py style= color:#FE6F43>View Code </a>";
	c4.className  ="circle CircleActive";
	c3.className  ="circle CircleInactive";
	c2.className  ="circle CircleInactive";
	c1.className  ="circle CircleInactive";
	c5.className  ="circle CircleInactive";
	console.log('Project 4 Loaded');
}
function c5clicked() {
	pich1.innerHTML = "School";
	pich2.innerHTML = "Sole-Developer";
	ProjectTitle.innerHTML = "Los Automatons";
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		{ProjectImage.src = "../../IMAGES/losautomatons.png";}
	else {ProjectImage.src = "../IMAGES/losautomatons.png";}
	ProjectDescription.innerHTML = "My Senior Project on the dangers of manufacturing and automation";
	c5.className  ="circle CircleActive";
	c4.className  ="circle CircleInactive";
	c3.className  ="circle CircleInactive";
	c2.className  ="circle CircleInactive";
	c1.className  ="circle CircleInactive";
	console.log('Project 5 Loaded');
}
//To Change The background color of the bubble change the selected circle to the class .circle