import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = (book: Book) => {
    setCartItems([...cartItems, book]);
  };

  useEffect(() => {
    const controller = new BookController();
    controller.fetchBooks().then(() => {
      setBooks(controller.getBooks());
    });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="justify-content-between"
        >
          <Navbar.Brand as={Link} to="/">
            Bookstore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {!isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signin">
                    Sign In
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/cart">
                    Cart ({cartItems.length})
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signout" onClick={handleLogout}>
                    Sign Out
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/signup">
            <SignUp onLogin={handleLogin} />
          </Route>
          <Route path="/signin">
            <SignIn onLogin={handleLogin} />
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
