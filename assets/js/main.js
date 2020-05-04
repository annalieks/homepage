window.onload = function() {
	this.setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("loader").classList.toggle('fade');
	document.getElementById("content").classList.toggle('appear');
}

