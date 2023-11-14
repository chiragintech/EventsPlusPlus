import React from "react";
import "./LogIn.css";
import NavBar from "../NavBar.js";
function LogIn() {
  return (
    <>
      <NavBar />
      <div className="login">
        <div className="login-welcome">
          <h1>Welcome Back</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem sapiente laborum maxime totam commodi, inventore aspernatur! Excepturi ex eveniet repellat animi porro asperiores, voluptate veniam, quaerat voluptas velit perspiciatis!</p>
        </div>
        <div className="login-forms">
          <form>
            <h1 id="login_head">Log In</h1>
            {/* <label htmlFor="" className="login-label">
              Email or Phone number
            </label> */}
            <input type="text" name="" className="login-inp" placeholder="Email"/>
            {/* <label htmlFor="" className="login-label">
              Password
            </label> */}
            <input type="password" name="" className="login-inp" placeholder="Password"/>
            <input type="submit" value="Log In" id="login_button" />
            <a href="/signup" id="signup_link">
              If you don't have an account, click here!
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
