import Events from "../Events.js";
import "./Create.css";
import "./Home.css";
import NavBar from "../NavBar.js";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    let [events, setEvents] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3010/get")
        .then((result) => {
            let resData = result.data.reverse();
            setEvents(resData);
            console.log(result.data);
        })
        .catch((err) => {
            console.log(err);
            console.log(events);
        });
    }, [events]);
    return (
        <div>
            <NavBar />
            <div className="banner">
                <h1 id="banner_desc">Plan Your Perfect Event With Event++</h1>
                <p id="banner_span">It's all in the details</p>
            </div>
            <h1 id="desc_header1">Popular</h1>
            <div id="event">
                {events.map((event, i) => (
                    <Events
                        name = {event.task.eventName}
                        img={event.task.eventImgURL}
                        address={event.task.eventAddress}
                        date={event.task.eventDate}
                        about={event.task.eventAbout}
                        price={event.task.eventPrice}
                        key = {i}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Home;