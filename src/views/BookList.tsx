import React from "react";
import { Button, Card } from "react-bootstrap";
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
      {books.map((book) => (
        <Card key={book.id} className="mb-3">
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {book.author}
            </Card.Subtitle>
            <Card.Text>{book.description}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(book)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
