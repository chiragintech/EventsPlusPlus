import { useState, useEffect} from 'react'
import Events from '../Events.js';
import NavBar from '../NavBar.js';
import axios from 'axios';
import './Search.css'

function Search() {
    let [events, setEvents] = useState([]);
    let [search, setSearch] = useState('');

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
            // console.log(events);
        });
    }, [events]);
    return (
        <div className='body'>
            <NavBar/>
            <div className="search">
                <div className="search-card1">
                    <input type="text" className="search-inp" onChange={(e) => setSearch(e.target.value)} placeholder='Search'/>
                </div>
                <div className="search-card2">
                    {events
                        .filter((event) => {
                        return search.toLowerCase() === '' ? event : event.task.eventName.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((event, i) => (
                        <Events
                            display="block"
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
            </div>
        </div>
    );
}

export default Search
