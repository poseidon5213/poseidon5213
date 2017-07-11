	var SoundCloud = document.getElementById('SoundCloud');
	var PageName = document.getElementById('PageName');
	var Tri =  document.getElementById('tri');
	/*
	var JProgress = document.getElementById('JProgress');
	var JSProgress = document.getElementById('JSProgress');
	var HCProgress = document.getElementById('HCProgress');
	var IProgress = document.getElementById('IProgress');
	var PhProgress = document.getElementById('PhProgress')
	*/
function progressbarchanger() {
	Tri.className = "triangle TriangleAnimation";
	SoundCloud.style.display = "block";
	PageName.style.marginTop  = "8.5%";
	Tri.setAttribute( "onclick", "progressbarchangerreverse()");
	/*JProgress.value = Math.floor(Math.random() * 100);
	JSProgress.value = Math.floor(Math.random() * 100);
	HCProgress.value = Math.floor(Math.random() * 100);
	IProgress.value = Math.floor(Math.random() * 100);
	PhProgress.value = Math.floor(Math.random() * 100);
	*/
	}
function progressbarchangerreverse() {
	tri.className = "triangle TriangleAnimationReverse";
	SoundCloud.style.display = "none";
	PageName.style.marginTop = "27%";
	tri.setAttribute( "onclick", "progressbarchanger()" );
}
