import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../fire";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser("");
      }
    });
  }, []); // might not need this

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return hasAccount ? (
    <>
      <section className="login">
        <div className="login-control">
          <div>
            <label>Email address</label>
            <input
              type="text"
              placeholder="Email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signInButton" onClick={() => loginSubmit}>
            Sign in
          </button>
          <label>Don't have an account?</label>
          <button
            className="createAccount"
            onClick={() => (
              setHasAccount(!hasAccount), setEmail(""), setPassword("")
            )}
          >
            Create Account
          </button>
          <Link to="/">Back to browse</Link>
        </div>
      </section>
    </>
  ) : (
    // No account --- ADD FUNCTION TO SHOW PASSWORDS
    <section className="login">
      <div className="login-control">
        <div>
          <label>Email address</label>
          <input
            type="text"
            placeholder="Email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="signUpButton" onClick={() => signUpSubmit}>
          Sign up
        </button>
        <p></p>
        <label>Already have an account?</label>
        <button
          className="signInButton"
          onClick={() => (
            setHasAccount(!hasAccount),
            setEmail(""),
            setPassword(""),
            setConfirmPassword("")
          )}
        >
          Sign in
        </button>
        <Link to="/">Back to browse</Link>
      </div>
    </section>
  );
};

export default CreateAccount;
