import React, {useState} from "react";
import {AiFillStar} from 'react-icons/ai'


function SearchLoop(props)
{
    const [isClicked,setisClicked] = useState(false);

    return(
        <div className="bus_details">
                            <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
                            <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
                            <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
                            <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
                            <AiFillStar className={ isClicked ? `starIconActive starIcon` :`starIcon` } onClick={()=>setisClicked(!isClicked)} />
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