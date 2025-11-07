import React from "react";
import PropTypes from 'prop-types'

class DataFormResult extends React.Component {
    static defaultTypes = {
        email: 'not provided',
        name: 'not provided',
        address: 'not provided',
        address2: 'not provided',
        city: 'not provided',
        province: 'not provided',
        postalCode: 'not provided',
    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="DataFormResult">
                <p>Email: {this.props.email}</p>
                <p>Name: {this.props.name}</p>
                <p>Address: {this.props.address}</p>
                <p>Address2: {this.props.address2}</p>
                <p>City: {this.props.city}</p>
                <p>Province: {this.props.province}</p>
                <p>PostalCode: {this.props.postalCode}</p>
            </div>
        )
    }

}

DataFormResult.propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address2: PropTypes.string,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
}
export default DataFormResult;