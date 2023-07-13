// src/App.tsx

import React, { useEffect, useState } from "react";
import BookList from "./views/BookList";
import { Book } from "./models/Book";
import { BookController } from "./controllers/BookController";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const controller = new BookController();
    controller.fetchBooks().then(() => {
      setBooks(controller.getBooks());
    });
  }, []);

  return (
    <div className="App">
      <BookList books={books} />
    </div>
  );
};

export default App;
