import React from "react";
import { Book } from "../models/Book";

interface BookListProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAddToCart }) => {
  const handleAddToCart = (book: Book) => {
    onAddToCart(book);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
