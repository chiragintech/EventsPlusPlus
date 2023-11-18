import "./Create.css";
import NavBar from '../NavBar.js'
import React, {useState} from "react";
import axios from "axios";

function Create() {
    const [task, setTask] = useState({
        eventName: "",
        eventLink: "",
        eventAbout: "",
        eventAddress: "",
        eventImgURL: "",
        eventDate: "",
        eventPrice: "",
        eventType: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleAdd = () => {
        axios
        .post("http://localhost:3010/add", {task: task})
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    };

    return (
        <div className="create">
            <NavBar />
            <h1 className="create-h1">Create a new event</h1>
            <div className="create-sec">
                <div className="create-card1">
                    {/* <label htmlFor="">Event Name</label> */}
                    <input
                        className="create-inp"
                        type="text"
                        value={task.eventName}
                        name="eventName"
                        onChange={handleChange}
                        placeholder="Event Name"
                    />

                    {/* <label htmlFor="">Link/URL</label> */}
                    <input
                        className="create-inp"
                        type="url"
                        name="eventLink"
                        value={task.eventLink}
                        onChange={handleChange}
                        placeholder="Link/URL"
                    />

                    {/* <label htmlFor="">Image URL</label> */}
                    <input
                        className="create-inp"
                        type="url"
                        name="eventImgURL"
                        value={task.eventImgURL}
                        onChange={handleChange}
                        placeholder="Image URL"
                    />
                    {/* <label htmlFor="">Date</label> */}
                    <input
                        className="create-inp"
                        type="text"
                        name="eventDate"
                        value={task.eventDate}
                        onChange={handleChange}
                        placeholder="Date"
                    />
                </div>
                <div className="create-card2">
                    
                    <select id="create-event-type" name="eventType" onChange={handleChange} value={task.eventType}>
                        <option value="">--Select category--</option>
                        <option value="music">Musical</option>
                        <option value="technical">Technical</option>
                        <option value="sports">Sports</option>
                        <option value="health">Health</option>
                    </select>

                    <input
                        className="create-inp"
                        type="text"
                        name="eventAbout"
                        value={task.eventAbout}
                        onChange={handleChange}
                        placeholder="About"
                    />

                    {/* <label htmlFor="">Location Adress</label> */}
                    <input
                        className="create-inp"
                        type="text"
                        name="eventAddress"
                        value={task.eventAddress}
                        onChange={handleChange}
                        placeholder="Location"
                    />

                    {/* <label htmlFor="">Price</label> */}
                    <input
                        className="create-inp"
                        type="text"
                        name="eventPrice"
                        value={task.eventPrice}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                </div>
            </div>
            <button type="reset" onClick={handleAdd} id="btn">
                Create New Event
            </button>
        </div>
    );
}

export default Create;