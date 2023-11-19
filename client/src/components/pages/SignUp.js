import React from 'react'
import { useState } from 'react';
import './Signup.css';
import NavBar from "../NavBar.js";

function SignUp() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        srn: '',
        semester: '',
        department: '',
        password: ''
    })

    const handleSubmit = (event) => {
        //event.preventDefault();
        // console.log('Form submitted:', { username, email, phoneNumber, srn, semester, department, password});
        console.log(userDetails);
        setUserDetails([]);
    };
    const handleEmpty = () => {
        setUserDetails
        ({
            username: '',
            email: '',
            phoneNumber: '',
            srn: '',
            semester: '',
            department: '',
            password: ''
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <div className="signup">
                <NavBar />
                <h1 id="signup_head">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form_signup">
                        <div className="left">
                            <label>
                                <input
                                    className="signup-inp"
                                    type="text"
                                    placeholder="UserName"
                                    value={userDetails.username}
                                    name="username"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    className="signup-inp"
                                    type="email"
                                    placeholder="Email"
                                    value={userDetails.email}
                                    name="email"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    className="signup-inp"
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={userDetails.phoneNumber}
                                    name="phoneNumber"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    className="signup-inp"
                                    type="text"
                                    placeholder="SRN"
                                    value={userDetails.srn}
                                    name="srn"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                        </div>
                        <div className="right">
                            <label>
                                <input
                                    className="signup-inp"
                                    type="text"
                                    placeholder="Semester"
                                    value={userDetails.semester}
                                    name="semester"
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    className="signup-inp"
                                    type="text"
                                    placeholder="Department"
                                    value={userDetails.department}
                                    name="department"
                                    onChange={handleChange}
                                    id="dept_tb"
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    className="signup-inp"
                                    type="password"
                                    placeholder="Password"
                                    value={userDetails.password}
                                    name="password"
                                    onChange={handleChange}
                                />
                            </label>
                            <button type="submit" id="signup_button" onClick={handleEmpty}>
                                Submit
                            </button>
                            <br />
                            <br />
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    );
}

export default SignUp