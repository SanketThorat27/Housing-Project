import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Create Account</h1>
          <div className="social-container">
            <button className="social"><i class="fa-brands fa-google"></i></button>
            <button className="social"><i class="fa-duotone fa-solid fa-square-envelope"></i></button>
            <button className="social"><i class="fa-brands fa-github"></i></button>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="password" name="password" placeholder="Create Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Login</h1>
          <div className="social-container">
            <button className="social"><i class="fa-brands fa-google"></i></button>
            <button className="social"><i class="fa-duotone fa-solid fa-square-envelope"></i></button>
            <button className="social"><i class="fa-brands fa-github"></i></button>
          </div>
          <span>or use your email account</span>
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <a href="/forgot-password" className="forgot-password">Forgot Your Password?</a>
          <button><Link to="/HomePage"  type="submit">Login</Link></button>
        </form>
      </div>
      
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To stay connected with us, please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignUp(false)}>Login</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
