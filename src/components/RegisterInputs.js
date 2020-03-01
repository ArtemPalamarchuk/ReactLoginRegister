import React, {Fragment} from 'react'

class RegisterInputs extends React.Component{
    render() {
        return (
            <Fragment>
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                />
            </Fragment>
        )
    }
}

export default RegisterInputs;
