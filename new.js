
function nextImage(el){
	if (el.src.match("imuy/hit.jpg")){
		el.src="imuy/gok.png";
	} else if (el.src.match("imuy/gok.png")){
		el.src="imuy/hit.jpg";
	} else {
	}
}

function nextImag(el){
	if (el.src.match("imuy/cell.jpg")){
		el.src="imuy/hi.jpg";
	} else if (el.src.match("imuy/hi.jpg")){
		el.src="imuy/cell.jpg";
	} else {
	}
}

function nextIma(el){
	if (el.src.match("imuy/images.png")){
		el.src="imuy/cell.jpg";
	} else if (el.src.match("imuy/cell.jpg")){
		el.src="imuy/images.png";
	} else {
	}
}
function nextIm(el){
	if (el.src.match("imuy/by.jpg")){
		el.src="imuy/hi.jpg";
	} else if (el.src.match("imuy/hi.jpg")){
		el.src="imuy/by.jpg";
	} else {
	}
}

function checkConfiguration(el){

	if(document.getElementById("slot1").src.match("imuy/cell.jpg") && document.getElementById("slot2").src.match("imuy/by.jpg") && document.getElementById("slot3"). src.match("imuy/gok.png") && document.getElementById("slot4").src.match("imuy/hi.jpg")){
		document.getElementById("slot1").classList.add("opaque");
		document.getElementById("slot2").classList.add("opaque");
		document.getElementById("slot3").classList.add("opaque");
		document.getElementById("slot4").classList.add("opaque");
		document.getElementById("shit").classList.add("display");
		document.getElementById("key").classList.remove("display");
	} else {
		
	}
}

function checkConfiguratio(el){

	if(document.getElementById("shit").src.match("imuy/key.png") ){
	
	} else {
		
	}
}


"_imuy/kn.png","_imuy/key.png"