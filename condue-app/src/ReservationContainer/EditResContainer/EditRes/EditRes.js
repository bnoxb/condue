import React from 'react';

const EditRes = (props) => {
    return(
        <div>
            <form onSubmit={props.closeModalAndUpdate.bind(null, props.resToEdit)}>
                <label>
                        Edit Name:
                        <input type="text" name="name" value={props.resToEdit.name} onChange={props.handleEditFormInput}/><br/>
                    </label>
                    <label>
                        Edit Time:
                        <input type="text" name="time" value={props.resToEdit.time} onChange={props.handleEditFormInput}/><br/>
                    </label>
                    <label>
                        Edit Number of Guests:
                        <input type="number" name="numGuests" value={props.resToEdit.numGuests} onChange={props.handleEditFormInput}/><br/>
                    </label>
                    <label>
                        Edit Notes:
                        <input type="text" name="note" value={props.resToEdit.note} onChange={props.handleEditFormInput}/><br/>
                    </label>
                    <input type="Submit"/>
            </form>
        </div>
    )
}

export default EditRes;