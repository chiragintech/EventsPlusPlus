import "./Create.css";
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
        <div className="create-sec">
            <div className="create-img"></div>
            <div className="create-card">
                <label htmlFor="" color="black">Event Name</label>
                <input type="text" value={task.eventName} name="eventName" onChange={handleChange} />

                <label htmlFor="">Link/URL</label>
                <input type="url" name="eventLink" value={task.eventLink} onChange={handleChange} />

                <label htmlFor="">Image URL</label>
                <input type="url" name="eventImgURL" value={task.eventImgURL} onChange={handleChange} />

                <label htmlFor="">Date</label>
                <input type="text" name="eventDate" value={task.eventDate} onChange={handleChange} />
                <h2>Location</h2>

                <label htmlFor="">About</label>
                <input type="text" name="eventAbout" value={task.eventAbout} onChange={handleChange} />

                <label htmlFor="">Location Adress</label>
                <input type="text" name="eventAddress" value={task.eventAddress} onChange={handleChange} />

                <label htmlFor="">Price</label>
                <input type="text" name="eventPrice" value={task.eventPrice} onChange={handleChange} />

                <button type="button" onClick={handleAdd}>
                    Create New Event
                </button>
            </div>
        </div>
    );
}

export default Create;