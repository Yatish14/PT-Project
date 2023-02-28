import React from "react";
import './search.css'
import {AiFillStar} from 'react-icons/ai'
import { useState } from "react";
function SearchBus()
{
    const [isClicked,setisClicked] = useState(false);

    return(
        <div className="search_page">
            <div className='location_search'>
            <h2>Search Buses</h2>
            <p>From</p>
            <input type="text" placeholder="Select From Location"></input>
            <p>To</p>
            <input type="text" placeholder="Select To Location"></input>
            <button>Search</button>
            </div>
            <div className="recent_search">
                
                <h5>Recent Searches</h5>
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kandigai</td>
                            <td>Tambaram</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bus_details">
                <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
                <h5>Kandigai - Tambaram </h5>
                <p>
                    Depot Name : Tambaram
                    <br />
                    Scheduled Departure <span className="dep_time">3:10pm</span>
                    <br />
                    Scheduled Arrival <span className="arr_time">3:55pm</span>
                </p>
            </div>
        </div>
    
    )
}


export default SearchBus