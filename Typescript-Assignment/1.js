var bookStore = /** @class */ (function () {
    function bookStore(isbn, bookname, bookTitle, bookAuthor, quantityOfBooks) {
        this.isbn = isbn;
        this.bookname = bookname;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantityOfBooks = quantityOfBooks;
    }
    bookStore.prototype.display = function () {
        console.log(this.isbn + " " + this.bookAuthor + " " + this.bookTitle + " " + this.bookname + " " + this.quantityOfBooks);
    };
    return bookStore;
}());
var book1 = new bookStore("1234", "ABCD", "XYZE", "JVKE", 5);
book1.display();
