import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import SignOut from "./views/SignOut";
import Cart from "./views/Cart";
import BookList from "./views/BookList";
import { Book } from "./models/Book";

import { BookController } from "./controllers/BookController";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [cartItems, setCartItems] = useState<Book[]>([]);

  const handleAddToCart = (book: Book) => {
    setCartItems([...cartItems, book]);
  };

  useEffect(() => {
    const controller = new BookController();
    controller.fetchBooks().then(() => {
      setBooks(controller.getBooks());
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <li>
              <Link to="/signout">Sign Out</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/signout">
            <SignOut />
          </Route>
          <Route path="/">
            <BookList books={books} onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
