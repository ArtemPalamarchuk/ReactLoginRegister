import React from 'react';
import './App.css';
import Form from "./components/Form";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registerTitle: "Sign Up for Free",
            logInTitle: "Log In",
            headerTitle: "Sign Up for Free",
        };

        this.loginTitleHandle = this.loginTitleHandle.bind(this);
        this.registerTitleHandle = this.registerTitleHandle.bind(this);
    }

    loginTitleHandle(e) {

        const registerButton = document.getElementById('registerButton');
        registerButton.style.backgroundColor = 'white';
        registerButton.style.color = 'black';

        e.target.style.backgroundColor = '#5CB03A';
        e.target.style.color = 'white';

        this.setState(() => {
            return {headerTitle: this.state.logInTitle}
        });
    }

    registerTitleHandle(e) {

        const loginBtn = document.getElementById('loginButton');
        loginBtn.style.backgroundColor = 'white';
        loginBtn.style.color = 'black';

        e.target.style.backgroundColor = '#5CB03A';
        e.target.style.color = 'white';

        this.setState(() => {
            return {headerTitle: this.state.registerTitle}
        });
    }

    render() {
        //console.log(this.state)
        return (
            <Form
                loginTitle={this.loginTitleHandle}
                registerTitle={this.registerTitleHandle}
                formState={this.state.headerTitle}
            >
            </Form>
        )
    }
}

export default App;
