import React from 'react';
import {LoginInputs} from "./LoginInputs/LoginInputs";
import {RegisterInputs} from "./RegisterInputs/RegisterInputs";

export const Body = ({activeBtn}) => {

    if (activeBtn === 'login') {
        return (
            <div className="inputsWrap">
                <LoginInputs/>
            </div>
        )
    } else {
        return (
            <div className="inputsWrap">
                <RegisterInputs/>
            </div>
        )
    }
};