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

    closeModalAndUpdate = async (resToEdit, e) => {
        e.preventDefault();
        console.log('closeModal, restoedit:', resToEdit);
        try{
            // the fetch
            const resResponse = await fetch(`http://localhost:9000/api/v1/reservations/${resToEdit._id}`, {
                method: "PUT",
                body: JSON.stringify(resToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // error catching
            if(!resResponse.ok){
                throw Error(resResponse.statusText);
            }
            // parse it
            const parsedResponse = await resResponse.json();
            console.log(parsedResponse);
            //make new array and replace the res that matches id with the parsedResponse
            const newMyReses = this.state.myReses.map((res)=> {
                if(res._id === resToEdit._id){
                    res = parsedResponse;
                }
                return res;
            });

            this.setState({
                showModal: false,
                myReses: newMyReses
            })

        }catch(err){
            console.log(err);
        }
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
                {this.state.showModal ? <EditRes resToEdit={this.state.resToEdit} handleEditFormInput={this.handleEditFormInput}  closeModalAndUpdate={this.closeModalAndUpdate}/> : null}
            </div>
        )
    }
}

export default EditResContainer;