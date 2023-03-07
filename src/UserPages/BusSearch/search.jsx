import React, { useState, useEffect } from "react";
import './search.css'
import SearchLoop from "./SearchLoop";

function SearchBus() {
    const [showSearch, SetShowSearch] = useState(true)
    const [showBuses, setShowBuses] = useState(false)
    const busesList = [ {
        id : 0,
        start : "Tambaram",
        destination : "Kellambakam",
        departure : "3:10pm",
        arrvial : "3:50pm"
    },
    {
        id : 1,
        start : "Tambaram",
        destination : "Kellambakam",
        departure : "3:10pm",
        arrvial : "3:50pm"
    },
    {
        id : 2,
        start : "Tambaram",
        destination : "Kellambakam",
        departure : "3:10pm",
        arrvial : "3:50pm"
    },
    {
        id : 3,
        start : "Tambaram",
        destination : "Kellambakam",
        departure : "3:10pm",
        arrvial : "3:50pm"
    },
    {
        id : 4,
        start : "Tambaram",
        destination : "Kellambakam",
        departure : "3:10pm",
        arrvial : "3:50pm"
    }]
    const [buses, setBuses] = useState(busesList)

    const HandelClick = () => {
        SetShowSearch(false)
        setShowBuses(true)
    }

    return (
        <div className="search_page">
            <div className='location_search'>
                <h2>Search Buses</h2>
                <p>From</p>
                <input type="text" placeholder="Select From Location"></input>
                <p>To</p>
                <input type="text" placeholder="Select To Location"></input>
                <button onClick = {HandelClick}>Search</button>
            </div>
            {
                showSearch && (<div className="recent_search">
                <br />
                <h5>Recent Searches</h5>
                <table>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                    <tr>
                        <td>Kandigai</td>
                        <td>Tambaram</td>
                    </tr>
                    <br />
                </table>
            </div>)
            }
            {
                showBuses && (buses.map((value, key) => (<SearchLoop key = {key} bus = {value} />)))
            }
        </div>

    )
}

export default SearchBus