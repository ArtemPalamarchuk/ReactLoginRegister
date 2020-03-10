import React from 'react';

export const RegisterButton = ({setTitleText, ActiveTitle, setActiveTitle, setActiveBtn}) => {
    return (
        <button
            className={`btn ${ActiveTitle === 'Register' && 'activeBtn'}`}
            onClick={() => {
                setActiveTitle('Register');
                setTitleText('Register');
                setActiveBtn ('register');
            }}
        >
            Register
        </button>
    )
};