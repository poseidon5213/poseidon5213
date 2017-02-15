
function play() {
	var JProgress = document.getElementById('JProgress');
	var JSProgress = document.getElementById('JSProgress');
	var HCProgress = document.getElementById('HCProgress');
	var IProgress = document.getElementById('IProgress');
	var PhProgress = document.getElementById('PhProgress');
	var tri =  document.getElementById('tri');
	tri.className = "triangle TriangleAnimation";
	var y = 0;
	//Can Make it even more random with an array
	
	while (y < 11) {
	JProgress.value = Math.floor(Math.random() * 100);
	/* JSProgress.value = Math.floor(Math.random() * 100);
	HCProgress.value = Math.floor(Math.random() * 100);
	IProgress.value = Math.floor(Math.random() * 100);
	PhProgress.value = Math.floor(Math.random() * 100); */
	console.log("Y = " + y + " JavaProgress.value= " + JProgress.value);
	y++;
	}
}
