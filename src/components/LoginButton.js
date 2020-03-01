import React, {Component} from 'react'

class LoginButton extends Component {
    render() {
        return (
            <button
                id="loginButton"
                className="loginButton"
                onClick={this.props.changeTitle}
            >
                Log In
            </button>
        )
    }
}

export default LoginButton;