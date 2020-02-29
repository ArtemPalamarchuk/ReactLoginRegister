import React from 'react';
import './App.css';
// import RegisterButton from "./components/header/RegisterButton";
// import LoginButton from "./components/header/LoginButton";
// import HeaderName from "./components/header/HeaderName";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: "Sign Up for Free",
            isActiveBtn: true,
        };
        //this.changeHeaderTitle = this.changeHeaderTitle.bind(this);
        //this.changeHeaderTitle = this.changeHeaderTitle.bind(this);
    }

    // changeHeaderTitle() {
    //     this.setState((state) => {
    //         return {headerName: "Log In"};
    //     });
    // }

    render() {
        //const {changeHeaderTitle} = this;
        return (
            <div className={"form"}>
                {/*<div className={"loginRegisterButtonsWrap"}>*/}
                {/*    <RegisterButton/>*/}
                {/*    <LoginButton*/}
                {/*        // changeHeaderTitle={changeHeaderTitle}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<HeaderName*/}
                {/*    name={this.state.headerName}*/}
                {/*/>*/}
                {/*<div className={"inputsWrap"}>*/}

                {/*</div>*/}
                {/*<div className={"submitBtnWrap"}>*/}

                {/*</div>*/}
            </div>
        )
    }
}

export default App;
