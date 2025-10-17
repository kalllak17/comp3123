import React from "react";
import PropTypes from "prop-types";


class StudentInfo extends React.Component {

    static defaultTypes = {
        studentName: 'not provided',
        studentId: 'not provided',
    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="student-info">
                <p>Student name: {this.props.studentName}</p>
                <p>ID: {this.props.studentId}</p>
            </div>
        )
    }

}

StudentInfo.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentId: PropTypes.string.isRequired,
}


export default StudentInfo;