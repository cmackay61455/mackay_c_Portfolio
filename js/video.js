// DO NOT DELETE LINE
$(document).foundation()

//start js here:

var myVideo = document.getElementById("video");


function mouseIn(id,text) {
	document.getElementById(id).style.visibility = "visible";
	document.getElementById(id).innerHTML = text;
	document.getElementById(id).style.backgroundColor = "white";
	document.getElementById(id).style.opacity = "0.5";
	}

function mouseOut(id){
	document.getElementById(id).style.visibility = "hidden";
}

function playPauseVid(){
	if(myVideo.paused)
		myVideo.play();
	else
		myVideo.pause()
}