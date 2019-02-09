import React, { Component } from 'react';

class ReservationContainer extends Component {
    constructor() {
        super();

        this.state = {
            res: {
                name: '',
                time: '',
                numGuests: null,
                note: ''
            }
        }
    }
    render(){
        return(
            <div>
                <h1>Gonna make a ressss</h1>
            </div>
        )
    }
}

export default ReservationContainer;