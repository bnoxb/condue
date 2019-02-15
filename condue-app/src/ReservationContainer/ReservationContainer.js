import React, { Component } from 'react';
import CreateReservation from './CreateReservation/CreateReservation';
import EditResContainer from './EditResContainer/EditResContainer';
import { 
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import './style.css';


class ReservationContainer extends Component {
    constructor() {
        super();

        this.state = {
            reses: [],
            resName: '',
            showCreateModal: false,
            showResList: false,
        }
    }
    
    componentDidMount=()=>{
        console.log('component mounting');
        console.log(this.props.passTargetDate);
        this.getRes();
        if(this.props.passTargetDate){
            console.log(this.props.passTargetDate);
            this.setState({
                showCreateModal: true,
            })
        }

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
                resName: res.name,
                showResList: true,
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
        return(
            <div>
            <div className="parallaxRes">
                <div className="splash-content">
                    <Container>
                        <Row className="splash-row">
                            <Col sm="3" md="2"></Col>
                            <Col xs="12" sm="6" md="8">
                            <br/><br/>
                                <h1>Gonna make a ressss</h1>
                                <div className="splash-span">
                                    <Button className="splash-btn" onClick={this.showCreateModal}>Make Reservation</Button>
                                    <Button className="splash-btn" onClick={this.showResList}>View Your Reservations</Button>

                                    {this.state.showResList ? <EditResContainer reses={this.state.reses} handleDeleteRes={this.handleDeleteRes} resName={this.state.resName} /> : null}
                                    {this.state.showCreateModal ? <CreateReservation addRes={this.addRes} targetDate={this.props.targetDate}/> : null}
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