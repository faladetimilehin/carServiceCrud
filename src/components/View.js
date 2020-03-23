import React, { Component } from 'react'
import axios from 'axios';
import RecordsList from './RecordsList';
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



class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleDelete = (id) => {
        const newUsers = this.state.users.filter((data) => data.id !== id)
        axios.delete(`http://localhost:3000/users/${id}`).then((users) => {
            this.setState({
                users: newUsers
            })
            Toast.fire({
                icon: 'success',
                title: 'User deleted successfully'
            })
        });
    }

    usersList = () => {
        return this.state.users.map((object, i) => {
            return <RecordsList obj={object} key={i} handleDelete={this.handleDelete} />
        })
    }
   
    updateSearch = (event) => {
        const filtered = this.state.users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({search: event.target.value.substr(0,20), users: filtered});
        
    }

    render() {
  
        return (
            <div>
                <p align="center">Users List</p>
                <div>
                <a href="insert">Register User</a>
                
                <form className="search" style={{float:"right", margin:10}}>
                    <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Search.." name="search" ></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                </div>
                

                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Car Plate Number</th>
                            <th colSpan="2">Action</th>
                            <th>Modal</th>
                            <th scope="col">Amount to be Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>


            </div>
        )
    }
}
export default View;