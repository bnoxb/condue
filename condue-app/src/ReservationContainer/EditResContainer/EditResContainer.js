import React, { Component } from 'react';
import EditRes from './EditRes/EditRes';
import EditList from './EditList/EditList';

class EditResContainer extends Component {
    constructor(){
        super();

        this.state = {
            myReses: [],
            resToEdit: {
                name: '',
                time: '',
                numGuests: 1,
                note: ''
            },
            guestName: '',
            needRes: false,
            canEdit: false,
            showModal: false,
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const myRes = this.props.reses.filter((res) => res.name === this.state.guestName);
        console.log(myRes);
        if(myRes.length > 0) {
            this.setState({
                needRes: false,
                myReses: myRes,
                canEdit: true
            })
        } else {
            this.setState({
                needRes: true,
            })
        }
    }

    handleEditFormInput = (e) => {
        this.setState({
            resToEdit: {
                ...this.state.resToEdit,
                [e.target.name]: e.target.value
            }
        })

    }

    showModal = (res) => {
        console.log('in show modal!');
        this.setState({
            showModal: true,
            resToEdit: res
        })
    }

    closeModalAndUpdate = () => {
        // I am here...
    }

    render(){
        console.log(this.state, " my reses");
       
        return(
            <div>
                <h1>Enter Your Name</h1>
                {this.state.needRes ? <h1>You need to make a reservation</h1> : null}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="guestName" value={this.state.guestName} onChange={this.handleInput}/>
                    <input type="Submit"/>
                </form>
                {this.state.canEdit ? <EditList reses={this.state.myReses} showModal={this.showModal}/> : null}
                {this.state.showModal ? <EditRes resToEdit={this.state.resToEdit} handleEditFormInput={this.handleEditFormInput}/> : null}
            </div>
        )
    }
}

export default EditResContainer;