import { BookDto } from '@app/contracts/books/book.dto';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  private books: BookDto[] = [
    {
      id: 1,
      title: 'LOTR',
      author: 'Tolkien',
      rating: 5
    },
    {
      id: 2,
      title: 'LOTR 2',
      author: 'Tolkien',
      rating: 5
    },
    {
      id: 3,
      title: 'LOTR 3',
      author: 'Tolkien',
      rating: 5
    },
  ]

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1
    }
    this.books.push(newBook);
    return newBook
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find(book => book.id === id)
    console.log(book);
    
    return book

  }
  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      return `Book with id #${id} not found`;
    }
    const updatedBook = {
      ...this.books[bookIndex],
      ...updateBookDto
    };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      return `Book with id #${id} not found`;
    }
    this.books.splice(bookIndex, 1)
    return 'Book removed'
  }
}
