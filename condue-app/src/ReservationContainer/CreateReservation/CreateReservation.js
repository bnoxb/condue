import React, { Component } from 'react';

class CreateReservation extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            time: '',
            numGuests: 1,
            note: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state.name);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.addRes.bind(null, this.state)}>
                    <label>
                        Enter Name:
                        <input type="text" name="name" onChange={this.handleInput}/>
                    </label><br />
                    <label>
                        Enter Time:
                        <input type="text" name="time" onChange={this.handleInput}/>
                    </label><br/>
                    <label>
                        Enter Number of Guests:
                        <input type="number" name="numGuests" value={this.state.numGuests} onChange={this.handleInput}/>
                    </label><br/>
                    <label>
                        Additional Notes:
                        <input type="text" name="note" onChange={this.handleInput}/>
                    </label><br/>
                    <input type="Submit"/>
                </form>
            </div>
        )    
    }
}

export default CreateReservation;