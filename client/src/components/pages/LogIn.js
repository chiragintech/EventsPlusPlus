import React from 'react'
import './LogIn.css';
import NavBar from "../NavBar.js";
function LogIn() {
  return (
    <div className='login'>
        <div className='login_page'>
          <NavBar />
            <form>
            <h1 id='login_head'>Log In</h1>
                <label htmlFor="" id='entry_email/no'>Email or Phone number</label>
                <br />
                <input type="text" name="" id="entered_email/no" />
                <br />
                <label htmlFor="" id='entry_password'>Password</label>
                <br />
                <input type="password" name="" id="entered_password" />
                <br />
                <input type="submit" value="Log In" id='login_button'/>
                <a href="/signup" id='signup_link'>If you don't have an account, click here!</a>
            </form>
        </div>
    </div>
  )
}

export default LogIn