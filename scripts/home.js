function ExpandBooks() {
	var book_menu_div = document.getElementById('list-books-menu-option');

	var book_items = document.getElementsByClassName('menu-item-book');
	for (var i = 0; i < book_items.length; ++i) {
		if (book_items[i].style.display == 'block') {
			book_items[i].style.display = 'none';
			book_menu_div.style.backgroundImage = "url('/images/books-menu-home-open.png')";
		}
		else {
			book_items[i].style.display = 'block';
			book_menu_div.style.backgroundImage = "url('/images/books-menu-home-closed.png')";
		}
	}
}