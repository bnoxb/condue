import React from 'react';

const EditList = (props) => {
    const resList = props.reses.map((res) => {
        return(
            <li key={res._id}>
                Time: {res.time}<br/>
                Number of Guests: {res.numGuests}<br/>
                Your Notes: {res.note}
                <button>Delete</button>
                <button onClick={props.showModal.bind(null, res)}>Edit</button>
            </li>
        )
    })

    return(
        <div>
        <h1>Im in a list!</h1>
            <ul>
                {resList}
            </ul>
        </div>
        
    )
}

export default EditList;