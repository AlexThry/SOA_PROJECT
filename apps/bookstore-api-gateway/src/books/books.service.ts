import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PATTERNS } from '@app/contracts/books/books.pattern';

@Injectable()
export class BooksService {
  
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send(BOOKS_PATTERNS.CREATE, createBookDto)
  }

  findAll() {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ALL, {})
  }

  findOne(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.FIND_ONE, id)
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send(BOOKS_PATTERNS.UPDATE, updateBookDto)
  }

  remove(id: number) {
    return this.booksClient.send(BOOKS_PATTERNS.REMOVE, id)
  }
}
