function ExpandBooks() {
    var book_menu_div = document.getElementById('list-books-menu-option');

    var books_container_div = document.getElementById('books-container-div');

    if (books_container_div.style.display == 'block') {
        book_menu_div.style.backgroundImage = "url('/images/books-menu-home-open.png')";
    }
    else {
        book_menu_div.style.backgroundImage = "url('/images/books-menu-home-closed.png')";  
    }

    $('#books-container-div').slideToggle();
}