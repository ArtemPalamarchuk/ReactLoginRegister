import React from 'react';

export const LoginButton = ({setTitleText, ActiveTitle, setActiveTitle, setActiveBtn}) => {
    return (
        <button
            className={`btn ${ActiveTitle === 'Login' && 'activeBtn'}`}
            onClick={() => {
                setActiveTitle('Login');
                setTitleText('Login')
                setActiveBtn('login')
            }}
        >
            Log In
        </button>
    )
};