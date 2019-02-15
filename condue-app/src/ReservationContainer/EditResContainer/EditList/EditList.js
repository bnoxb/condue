import React from 'react';

const EditList = (props) => {
    let date = (new Date(props.res.date)).toDateString();
    if (!props.res.date){
        date = "None";
    }
    return(
        <div>
            <ul>
                <li>
                    Date: {date}<br/>
                    Time: {props.res.time}<br/>
                    Number of Guests: {props.res.numGuests}<br/>
                    Your Notes: {props.res.note}                    
                </li>
            </ul>
        </div>
    )
}

export default EditList;