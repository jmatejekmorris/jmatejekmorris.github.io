function ExpandBooks() {
	var book_items = document.getElementsByClassName('menu-item-book');
	for (var i = 0; i < book_items.length; ++i) {
		if (book_items[i].style.display == 'block') {
			book_items[i].style.display = 'none';
		}
		else {
			book_items[i].style.display = 'block';

      book_items[i].classList.add('blur');
		}
	}
}