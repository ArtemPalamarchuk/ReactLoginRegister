import '../App.css';

import React, {Component} from 'react'
import Header from "./Header";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import RegisterInputs from "./RegisterInputs";
import SubmitButton from "./SubmitButton";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <div className="loginRegisterButtonsWrap">
                    <RegisterButton
                        formState={this.props.formState}
                        changeTitle={this.props.registerTitle}
                    />
                    <LoginButton
                        formState={this.props.formState}
                        changeTitle={this.props.loginTitle}
                    />
                </div>
                <div className="headerWrap" >
                    <Header
                        active={this.props.active}
                        formState={this.props.formState}
                    />
                </div>
                <div className="registerInputsWrap">
                    <RegisterInputs/>
                </div>
                <div className="submitButtonWrap">
                    <SubmitButton/>
                </div>
            </div>
        )
    }
}

export default Form;