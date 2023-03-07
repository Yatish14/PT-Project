import React from "react";


function SearchLoop(props)
{
    return(
        <div className="bus_details">
            <h5>{props.bus.destination} - {props.bus.start} </h5>
                <p>
                    Depot Name : {props.bus.start}
                    <br />
                    Scheduled Departure <span className="dep_time">{props.bus.departure}</span>
                    <br />
                    Scheduled Arrival <span className="arr_time">{props.bus.arrvial}</span>
                </p>
        </div>
    )
}

export default React.memo(SearchLoop)