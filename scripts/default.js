window.onresize = function() {
	var content = document.getElementById('content');
	content.style.minHeight = '100vh';
}

function ExpandTopMenuBooks() {
    $('#books-menu-default').slideToggle(150);
}