	var Spotify = document.getElementById('Spotify');
	var PageName = document.getElementById('PageName');
	var tri =  document.getElementById('tri');
	/*
	var JProgress = document.getElementById('JProgress');
	var JSProgress = document.getElementById('JSProgress');
	var HCProgress = document.getElementById('HCProgress');
	var IProgress = document.getElementById('IProgress');
	var PhProgress = document.getElementById('PhProgress')
	*/
function progressbarchanger() {
	tri.className = "triangle TriangleAnimation";
	Spotify.style.display = "block";
	PageName.style.marginTop  = "5.6%";
	tri.setAttribute( "onClick", "progressbarchangerstop()" );
	/*JProgress.value = Math.floor(Math.random() * 100);
	JSProgress.value = Math.floor(Math.random() * 100);
	HCProgress.value = Math.floor(Math.random() * 100);
	IProgress.value = Math.floor(Math.random() * 100);
	PhProgress.value = Math.floor(Math.random() * 100);
	*/
	}
function progressbarchangerstop() {
	tri.className = "triangle";
	Spotify.style.display = "none";
	PageName.style.marginTop = "27%";
	tri.setAttribute( "onClick", "progressbarchanger()" );
}
