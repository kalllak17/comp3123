import React from "react";
import PropTypes from 'prop-types'


class Welcome extends React.Component {


    static defaultProps = {
        title_1: 'Welcome yo Fullstack Development - I',
        title_2: 'React JS Programming Week09 Lab exercise'
    }


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="welcome">
                <h1>{this.props.title_1}</h1>
                <h2>{this.props.title_2}</h2>
            </div>
        )
    }


}

Welcome.propTypes = {
    title_1: PropTypes.string,
    title_2: PropTypes.string
};

export default Welcome;
