// src/controllers/BookController.ts

import { Book } from "../models/Book";
import { getBooks } from "../services/bookService";

export class BookController {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  async fetchBooks(): Promise<void> {
    try {
      this.books = await getBooks(); // Implement a service function to fetch books from an API or mock data.
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  }

  getBooks(): Book[] {
    return this.books;
  }
}
