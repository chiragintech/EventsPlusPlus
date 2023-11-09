import NavBar from "../NavBar.js";
import Events from "../Events.js";
import './Home.css';
import event1 from '../../images/events1.jpg';
import event2 from '../../images/events2.jpg';
import event3 from '../../images/events3.jpg';


export function Home() {
    return (
        <div>
            <NavBar />
            <div className="image1">
                <h1 id="heading">Plan Your Perfect Event With Event++</h1>
                <p id="para">It's all in the details</p>
            </div>
            <h1 id="popular">Popular</h1>
            <div id="event">
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
        </div>
    );
}

