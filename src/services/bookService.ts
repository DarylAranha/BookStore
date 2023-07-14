// src/services/bookService.ts

import { Book } from "../models/Book";
import Books from "../data/booklist";

export async function getBooks(): Promise<Book[]> {
  // Implement the logic to fetch books from an API or return mock data.
  try {
    const response = await fetch("https://api.example.com/books");
    const data = await response.json();
    return data as Book[];
  } catch (err) {
    return Books as Book[];
  }
}
