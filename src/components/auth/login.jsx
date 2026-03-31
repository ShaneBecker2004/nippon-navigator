import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import "./auth.css";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (err) {
        setErrorMessage("Invalid email or password");
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        setErrorMessage("Google sign-in failed");
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
    <div className="auth-container">
      {userLoggedIn && <Navigate to="/" replace />}

      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input
            type="email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="auth-error">{errorMessage}</p>}

          <button className="auth-btn" disabled={isSigningIn}>
            {isSigningIn ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="auth-link">
            Sign up
          </Link>
        </p>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <button className="auth-btn" onClick={onGoogleSignIn}>
          Continue with Google
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;