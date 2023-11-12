import NavBar from "../NavBar.js";
import Events from "../Events.js";
import './Home.css';
import event1 from '../../images/events1.jpg';
import event2 from '../../images/events2.jpg';
import event3 from '../../images/events3.jpg';
import Footer from "./Footer.js";

export function Home() {
    return (
        <div>
            <NavBar />

            <div className="banner">
                <h1 id="banner_desc">Plan Your Perfect Event With Event++</h1>
                <p id="banner_span">It's all in the details</p>
            </div>

            <h1 id="desc_header1">Popular Events</h1>
            <div className="event">
                <Events
                    img={event1}
                    where="Bengaluru Startup Meet"
                    when="Friday 6:30 PM"
                    about="Draper Startup House for Entrepreneurs"
                    price="Free"
                />
                <Events
                    img={event3}
                    where="Lego Mechatronics : Innovators Program"
                    when="Saturday • 6:30 PM"
                    about="Accolades Badminton & Sports"
                    price="Free"
                />
                <Events
                    img={event2}
                    where="The Science of Tantra and Sexuality"
                    when="Saturday • 6:30 PM GMT+5:30"
                    about=""
                    price="Free"
                />
                <Events
                    img={event3}
                    where="Lego Mechatronics : Innovators Program"
                    when="Saturday • 6:30 PM"
                    about="Accolades Badminton & Sports"
                    price="Free"
                />
                <Events
                    img={event1}
                    where="Bengaluru Startup Meet"
                    when="Friday 6:30 PM"
                    about="Draper Startup House for Entrepreneurs"
                    price="Free"
                />
            </div>
            <Footer />
        </div>
    );
}

