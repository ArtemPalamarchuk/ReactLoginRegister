import React, {Component} from 'react'

class RegisterButton extends Component {
    render() {
        return (
            <button
                id="registerButton"
                className="registerButton"
                onClick={this.props.changeTitle}
            >
                Sign Up
            </button>
        )
    }
}

export default RegisterButton;