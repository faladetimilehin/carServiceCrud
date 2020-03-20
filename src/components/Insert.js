import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
export default class Insert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            carName: '',
            carPlateNumber: '',
            description:'',
            address: '',
            date: '',
            payment: ''
            
        }
    }
    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }
        onSubmit = (e) =>   {
            e.preventDefault();
            const obj = {
                name: this.state.name,
                email: this.state.email,
                carName: this.state.carName,
                carPlateNumber: this.state.carPlateNumber,
            description: this.state.description,
                phoneNumber: this.state.phoneNumber,
                address: this.state.address,
                date: this.state.date,
                payment: this.state.payment
            };
            axios.post('http://localhost:3000/users', obj)
           .then(res => console.log(res.data));
            

            this.setState({
                name: '',
                email: '',
                phoneNumber: '',
                carName: '',
                carPlateNumber: '',
                description:'',
                address: '',
                date: '',
                payment: ''
            })
            Toast.fire({
                icon: 'success',
                title: 'User Edited successfully'
              })
              this.props.history.push('/view', this.state)
        }

    render() {
        return (
            <div >
                <p>Add New User</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label Htmlfor="name">Name</label>
                            <input type="name" className="form-control"   id="name" required value={this.state.name} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label Htmlfor="inputEmail4">Email</label>
                            <input type="email" className="form-control"  id="email" required value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label Htmlfor="number">Phone Number</label>
                            <input type="number" className="form-control" id="number" required value={this.state.phoneNumber} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label Htmlfor="carname">Car Name</label>
                            <input type="carname" className="form-control" id="carname" required value={this.state.carName} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label Htmlfor="carPlateNumber">Car Plate Number</label>
                            <input type="carPlateNumber" className="form-control" id="carPlateNumber" required value={this.state.carPlateNumber} onChange={this.handleChange}></input>
                        </div> <div className="form-group col-md-6">
                            <label Htmlfor="description">Description of service </label>
                            <input type="description" className="form-control" id="description" required value={this.state.description} onChange={this.handleChange}></input>
                        </div>
                    
                    <div className="form-group col-md-6">
                        <label Htmlfor="inputAddress">Address</label>
                        <input type="textarea" className="form-control" id="inputAddress" required value={this.state.address} onChange={this.handleChange} ></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label Htmlfor="datecar">Date </label>
                        <input type="date" className="form-control" id="date" required value={this.state.date} onChange={this.handleChange} ></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label Htmlfor="payment">Payment </label>
                        <input type="number" className="form-control" id="payment" placeholder="&#8358;" required value={this.state.payment} onChange={this.handleChange} ></input>
                    </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Register User</button>
                </form>
            </div>
        )
    }
}
