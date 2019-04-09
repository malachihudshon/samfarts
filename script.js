function nextImage(el){

	if (el.src.match("images/hit.jpg")){

		el.src="images/goku.jpg";

	} else if (el.src.match("images/goku.jpg")){

		el.src="images/hit.jpg";

	} else {

	}

}



function nextImag(el){

	if (el.src.match("images/cell.jpg")){

		el.src="images/hit.jpg";

	} else if (el.src.match("images/hit.jpg")){

		el.src="images/cell.jpg";

	} else {

	}

}



function nextIma(el){

	if (el.src.match("images/goku.jpg")){

		el.src="images/cell.jpg";

	} else if (el.src.match("images/cell.jpg")){

		el.src="images/goku.jpg";

	} else {

	}

}

function nextIm(el){

	if (el.src.match("images/yemen.jpg")){

		el.src="images/hit.jpg";

	} else if (el.src.match("images/hit.jpg")){

		el.src="images/yemen.jpg";

	} else {

	}

}



function checkConfiguration(el){



	if(document.getElementById("slot1").src.match("images/cell.jpg") && document.getElementById("slot2").src.match("images/yemen.jpg") && document.getElementById("slot3"). src.match("images/goku.jpg") && document.getElementById("slot4").src.match("images/hit.jpg")){

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

