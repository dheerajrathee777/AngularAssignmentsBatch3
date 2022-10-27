class bookStore {
    private isbn: string;
    private bookname: string;
    private bookTitle: string;
    private bookAuthor: string;
    private quantityOfBooks: number;

    constructor(isbn: string, bookname: string, bookTitle: string, bookAuthor: string, quantityOfBooks: number) {
        this.isbn = isbn;
        this.bookname = bookname;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantityOfBooks = quantityOfBooks;
    }

    public display() {
        console.log(this.isbn + " " + this.bookAuthor + " " + this.bookTitle + " " + this.bookname + " " + this.quantityOfBooks);
    }
}

let book1: bookStore = new bookStore("1234","ABCD","XYZE","JVKE",5);
book1.display();