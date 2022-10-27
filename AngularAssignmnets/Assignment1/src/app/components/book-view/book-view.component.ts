import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})

export class BookViewComponent implements OnInit {

  books: Book[] = [];
  book: Book;

  constructor() {
    this.book = new Book();
    this.books = [
      { bookId: 1, bookName: 'Book1', author: 'Author1', price: 234, lang: 'English', year: 2016 },
      { bookId: 2, bookName: 'Book2', author: 'Author2', price: 334, lang: 'English', year: 2010 },
      { bookId: 3, bookName: 'Book3', author: 'Author3', price: 434, lang: 'German', year: 1999 }
    ]
  }

  ngOnInit(): void {
  }

  Save() {
    this.books.push(this.book);
    this.book = new Book();
  }

}
