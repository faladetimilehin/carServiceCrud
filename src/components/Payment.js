import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
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

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        const id = this.props.history.location.pathname.split('/')[2];
        axios.get(`http://localhost:3000/users/${id}`)
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
   handleToken = async (token, addresses) => {
       const { payment, name } = this.state.users
       const product = {
           name: name,
           price: payment
       }
        const response = await axios.post('http://localhost:8080/checkout',{
            token,
            product,
            payment,
        }

        );
        console.log(response, '======');
        const {status} = response.data;
        if (status === "success"){
              Toast.fire({
                icon: 'success',
                title: 'Payment successful'
              })
        }
        else{
            Toast.fire({
                icon: 'error',
                title: 'Payment Failed'
              })
        }
    }
    render() {
      
        return (
            <div>
                <p>Make Payment</p>
                <StripeCheckout
                    stripeKey='pk_test_GiLuTjL0ZOsHXqzcDMTgor3900S3RMjXBa'
                    token={this.handleToken}
                    amount={this.state.users.payment *100 }
                    name={this.state.users.description}
                // billingAddress
                // shippingAddress


                />
            </div>
        )
    }
}
