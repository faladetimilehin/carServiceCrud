import React, { Component } from 'react';
import { Redirect } from 'react-router'
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

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            carName: '',
            carPlateNumber: '',
            description: '',
            address: '',
            date: '',
            payment: '',
            redirect: false

        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`http://localhost:3000/users/${id}`)
        .then(response =>{
            const {
                    name,
                    email,
                    phoneNumber,
                    carName,
                    carPlateNumber,
                    description,
                    address,
                    date,
                    payment, 
                } = response.data
            this.setState({
                name,
                email,
                phoneNumber,
                carName,
                carPlateNumber,
                description,
                address,
                date,
                payment,
            });
        }, () => console.log(this.state.users)) 
        .catch(function (error){
            console.log(error);
        })
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

   
    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params
        const { name, email, carName, carPlateNumber, description, phoneNumber, address,date, payment} = this.state;
        axios.put(`http://localhost:3000/users/${id}`, { id, name, email, carName, carPlateNumber, description, phoneNumber, address,date, payment })
               .then((users) => {
                this.setState({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    carName: '',
                    carPlateNumber: '',
                    description: '',
                    address: '',
                    date: '',
                    payment: ''
                })
                Toast.fire({
                    icon: 'success',
                    title: 'User Edited successfully'
                  })
                this.props.history.push('/view', this.state)
               });
        
    }
    render() {
        const { redirect } = this.state;
        console.log(this.props.history)

        if (redirect) {
            return <Redirect to='/view' />;
        }
        return (
            <div >
                <p>Edit User</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="name">Name</label>
                            <input type="name" className="form-control" id="name" required value={this.state.name} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="email" required value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="number">Phone Number</label>
                            <input type="number" className="form-control" id="phoneNumber" required value={this.state.phoneNumber} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="carname">Car Name</label>
                            <input type="carname" className="form-control" id="carName" required value={this.state.carName} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="carPlateNumber">Car Plate Number</label>
                            <input type="carPlateNumber" className="form-control" id="carPlateNumber" required value={this.state.carPlateNumber} onChange={this.handleChange}></input>
                        </div> <div className="form-group col-md-6">
                            <label for="description">Description of service </label>
                            <input type="description" className="form-control" id="description" required value={this.state.description} onChange={this.handleChange}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputAddress">Address</label>
                            <input type="textarea" className="form-control" id="address" required value={this.state.address} onChange={this.handleChange} ></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="datecar">Date </label>
                            <input type="date" className="form-control" id="date" required value={this.state.date} onChange={this.handleChange} ></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="payment">Payment </label>
                            <input type="number" className="form-control" id="payment" placeholder="&#8358;" required value={this.state.payment} onChange={this.handleChange} ></input>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Update User</button>
                </form>
            </div>
        )
    }
}
