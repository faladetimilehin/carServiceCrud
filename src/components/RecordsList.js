import React, { Component } from 'react'

import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

class RecordsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/view' />;
        }
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.phoneNumber}
                </td>
                <td>
                    {this.props.obj.carPlateNumber}
                </td>

                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary"><i className="fas fa-user-edit" title="edit"></i></Link>
                </td>
                <td>
                    <button onClick={() => this.props.handleDelete(this.props.obj.id)} className="btn btn-danger"><i className="fas fa-user-minus" title="delete"></i></button>
                </td>
                <td>

                    <i className="fas fa-ellipsis-v"></i>
                </td>
                <td>
                    <Link to={"/payment/" + this.props.obj.id}>
                        &#x20A6;{formatCurrency(this.props.obj.payment)}
                    </Link>

                </td>
            </tr>
        )
    }
}

export default RecordsList;