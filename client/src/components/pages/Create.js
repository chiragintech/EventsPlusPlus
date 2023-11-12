import './Create.css';
import React from 'react';

export function Create() {
    return (
        <div>
            <div id='create-head'>
                <h1>We just need a few more details</h1>
            </div>
            <div id="create-card">
                <label htmlFor="">Event Name</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <br />
                <label htmlFor="">Link/URL</label>
                <br />
                <input type="url" name="" id="" />
                <br />
                <br />
                <h2>Location:</h2>
                <label htmlFor="">Location Name</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <br />
                <label htmlFor="">Location Address</label>
                <br />
                <input type="text" name="" id="" />
            </div>
        </div>
    );
}

