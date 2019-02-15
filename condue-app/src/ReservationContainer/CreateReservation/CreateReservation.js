import React, { Component } from 'react';

class CreateReservation extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            date: '',
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
        const date = new Date(this.props.targetDate);
        const jsonD = date.toJSON();
        let date2;
        let dateFinal;
        if(this.props.targetDate){
            const jsonDArr = jsonD.split('');
            date2 =  jsonDArr.splice(0, 10);
            dateFinal = date2.join('');
        } else {
            date2 = "there is no date";
        }
        return (
            <div>
                <form onSubmit={this.props.addRes.bind(null, this.state)}>
                    <label>
                        Enter Name:
                        <input type="text" name="name" onChange={this.handleInput}/>
                    </label><br />
                    <label>
                        Enter Date:
                        <input type="date" name="date" onChange={this.handleInput} value={dateFinal}/>
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