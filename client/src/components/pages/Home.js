import Events from "../Events.js";
import "./Home.css";
import NavBar from "../NavBar.js";
import Footer from '../pages/Footer.js'
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    let [events, setEvents] = useState([]);
    let [eventType, setEventType] = useState("music");

    useEffect(() => {
        axios
        .get("http://localhost:3010/get")
        .then((result) => {
            let resData = result.data.reverse();
            setEvents(resData);
            // console.log(result.data);
        })
        .catch((err) => {
            console.log(err);
            console.log(events);
        });
    }, [events]);

    function handleEventType(type) {
        setEventType(type);
    }

    return (
        <div>
            <NavBar />
            <div className="banner">
                <h1 id="banner_desc">Plan Your Perfect Event With Event++</h1>
                <p id="banner_span">It's all in the details</p>
            </div>
            <h1 className="desc_header1">Latest</h1>
            <div className="event">
                {events.map((event, i) => (
                    <Events
                        display={i > 6 ? "none" : "block"}
                        name={event.task.eventName}
                        img={event.task.eventImgURL}
                        address={event.task.eventAddress}
                        date={event.task.eventDate}
                        about={event.task.eventAbout}
                        price={event.task.eventPrice}
                        key={i}
                    />
                ))}
            </div>
            <h1 className="desc_header1">Categories</h1>
            <div className="btn-row">
                <button onClick={() => handleEventType("music")}>Music</button>
                <button onClick={() => handleEventType("technical")}>Technical</button>
                <button onClick={() => handleEventType("sports")}>Sports</button>
                <button onClick={() => handleEventType("health")}>Health</button>
            </div>
            <div className="event">
                {events.map((event, i) => (
                    <Events
                        display={event.task.eventType === eventType?'block':'none'}
                        name={event.task.eventName}
                        img={event.task.eventImgURL}
                        address={event.task.eventAddress}
                        date={event.task.eventDate}
                        about={event.task.eventAbout}
                        price={event.task.eventPrice}
                        key={i}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;