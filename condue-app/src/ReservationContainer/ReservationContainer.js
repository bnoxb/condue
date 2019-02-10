import React, { Component } from 'react';
import CreateReservation from './CreateReservation/CreateReservation';
import EditResContainer from './EditResContainer/EditResContainer';

class ReservationContainer extends Component {
    constructor() {
        super();

        this.state = {
            reses: [],
            showCreateModal: false,
            showResList: false,
        }
    }
    
    componentDidMount=()=>{
        this.getRes();
    }

    getRes = async () => {
        try{
            const response = await fetch('http://localhost:9000/api/v1/reservations');
            if(!response.ok){
                throw Error(response.statusText);
            }
            const parsedResponse = await response.json();
            this.setState({
                reses: parsedResponse.data
            })
        }catch(err){
            console.log(err);
        }
    }

    addRes = async (res, e) => {
        e.preventDefault();
        try{
            const resResponse = await fetch('http://localhost:9000/api/v1/reservations', {
                method: 'POST',
                body: JSON.stringify(res),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(!resResponse.ok){
                throw Error(resResponse.statusText);
            }

            const parsedRes = await resResponse.json();


            this.setState({
                reses: [
                    ...this.state.reses,
                    parsedRes
                ]
            })
        }catch(err){
            console.log(err);
        }
      
    }

    showCreateModal = () => {
        this.setState({
            showCreateModal: true,
            showResList: false,
        })
    }

    showResList = () => {
        this.setState({
            showResList: true,
            showCreateModal: false,
        })
    }

    render(){
        console.log(this.state, "is this.state");
        return(
            <div>
                <h1>Gonna make a ressss</h1>

                <button onClick={this.showCreateModal}>Make Reservation</button>
                <button onClick={this.showResList}>View Your Reservations</button>

                {this.state.showResList ? <EditResContainer reses={this.state.reses}/> : null}
                {this.state.showCreateModal ? <CreateReservation addRes={this.addRes} /> : null}
            </div>
        )
    }
}

export default ReservationContainer;