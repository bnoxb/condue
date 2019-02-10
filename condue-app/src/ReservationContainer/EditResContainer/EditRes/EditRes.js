import React from 'react';

const EditRes = (props) => {
    return(
        <div>
            <form>
                <label>
                    Edit Name:
                    <input type="text" name="name" value={props.resToEdit.name} onChange={props.handleEditFormInput}/>
                    Edit Time:
                    <input type="text" name="time" value={props.resToEdit.time} onChange={props.handleEditFormInput}/>
                </label>
            </form>
        </div>
    )
}

export default EditRes;