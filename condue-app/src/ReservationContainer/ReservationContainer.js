import React, { Component } from 'react';
import CreateReservation from './CreateReservation/CreateReservation';
import EditResContainer from './EditResContainer/EditResContainer';
import { 
    Container,
    Row,
    Col,
    Button,
    Media
} from 'reactstrap';
import './style.css';
import parallaxPic from '../images/stormtrooper-bartender.png';

const parallaxStyle = {
    backgroundImage: parallaxPic,
    backgroundRepeat:  'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '1000px'
}

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
                    parsedRes.data
                ],
                showCreateModal: false,
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

    handleDeleteRes = async (id) => {
        
        const newReses = this.state.reses.filter((res)=> res._id !== id );
            console.log(newReses);
            await this.setState({
                reses: newReses,
            })
    }
    render(){
        console.log(this.state, "is this.state");
        return(
            <div>
            <div style={parallaxStyle}>
                <div className="splash-content">
                    <Container>
                        <Row className="splash-row">
                            <Col sm="3" md="2"></Col>
                            <Col xs="12" sm="6" md="8">
                            <br/><br/>
                                <h1>Gonna make a ressss</h1>
                                <div className="splash-span">
                                    <button onClick={this.showCreateModal}>Make Reservation</button>
                                    <button onClick={this.showResList}>View Your Reservations</button>

                                    {this.state.showResList ? <EditResContainer reses={this.state.reses} handleDeleteRes={this.handleDeleteRes}/> : null}
                                    {this.state.showCreateModal ? <CreateReservation addRes={this.addRes} /> : null}
                                </div>
                                <div className="splash-brunch">
                                    <p> Come visit us in the morning on weekends, for <span className="span-brunch">Brunch</span></p><br/><br/>
                                </div>
                            </Col>
                            <Col sm="3" md="2"></Col>
                        </Row>
                    </Container>
                </div>
            </div>
                
            </div>
        )
    }
}

export default ReservationContainer;