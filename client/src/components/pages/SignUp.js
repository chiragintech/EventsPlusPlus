import React from 'react'
import { useState } from 'react';
import './Signup.css';
import NavBar from "../NavBar.js";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [srn, setSrn] = useState('');
    const [semester, setSemester] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email, phoneNumber, srn, semester, department, password});
    };

    return (
        <div>
            <div className='signup'>
            <NavBar />
            <form onSubmit={handleSubmit} className='form_signup'>
            <h1 id='signup_head'>Sign Up</h1>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='inputs'/>
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputs'/>
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='inputs'/>
                </label>
                <br />
                <label>
                    SRN:
                    <input type="text" value={srn} onChange={(e) => setSrn(e.target.value)} className='inputs'/>
                </label>
                <br />
                <label>
                    Semester:
                    <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} className='inputs'/>
                </label>
                <br />
                <label>
                    Department:
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className='inputs' id='dept_tb' />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inputs'/>
                </label>
                <button type="submit" id='signup_button'>Submit</button>
                <br />
                <br />
            </form>
            </div>
        </div>
    );
}

export default SignUp