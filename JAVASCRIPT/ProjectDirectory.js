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
   console.log('page loaded');
}
function c1clicked() {
	pich1.innerHTML = "School";
	pich2.innerHTML = "Chief Web Designer";
	ProjectTitle.innerHTML = "The Vitruvian";
	ProjectImage.src = "../IMAGES/vitruvian.png";
	ProjectDescription.innerHTML = "In English we formed groups and created a newspaper.<br>  "+
									"My group's newspaper was named after our school's logo<br> "+
									"which was influenced by Leonardo Da Vinci's work<br> "+
									"of art of the same name. ";
	c1.className  ="circle CircleActive";
	c2.className  ="circle CircleInactive";
	console.log('Project 1 Loaded');
}
function c2clicked() {
	pich1.innerHTML = "Self-Project";
	pich2.innerHTML = "Sole-Developer";
	ProjectTitle.innerHTML = "Scape";
	ProjectImage.src = "../IMAGES/scape.png";
	ProjectDescription.innerHTML = "My first product while learning how to use Unity and Csharp";
	c2.className  ="circle CircleActive";
	c1.className  ="circle CircleInactive";
	console.log('Project 2 Loaded');
}
//To Change The background color of the bubble change the selected circle to the class .circle