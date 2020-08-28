window.onload = updateContentDiv();

window.addEventListener('resize', updateContentDiv);

function updateContentDiv() {
	var height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

	var content = document.getElementById('content');
	content.style.height = height;
}