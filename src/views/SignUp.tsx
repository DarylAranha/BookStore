import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Alert } from "react-bootstrap";
import { app } from "../services/firebaseService";
import { useHistory } from "react-router-dom";

interface SignUpProp {
  onLogin: () => void;
}

const SignUp: React.FC<SignUpProp> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, showError] = useState(false);
  const history = useHistory();

  const handleSignUp = () => {
    const auth = getAuth(app);
    // Implement sign-up logic here, such as making an API request
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onLogin();
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode}: ${errorMessage}`);
        showError(true);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error ? (
        <Alert key="danger" variant="danger">
          Unable to sign in... Please try again later.
        </Alert>
      ) : null}
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
