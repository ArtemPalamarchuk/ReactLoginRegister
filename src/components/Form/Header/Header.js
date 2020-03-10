import React, {useState} from 'react';
import {LoginButton} from "./LoginButton";
import {RegisterButton} from "./RegisterButton";
import {Title} from "./Title";

export const Header = ({setActiveBtn}) => {

    const [titleText, setTitleText] = useState('Register');
    const [ActiveTitle, setActiveTitle] = useState('Register');

    return (
        <>
            <div className="headerWrap">
                <RegisterButton
                    setTitleText={setTitleText}
                    setActiveTitle={setActiveTitle}
                    ActiveTitle={ActiveTitle}
                    setActiveBtn = {setActiveBtn}
                />
                <LoginButton
                    setTitleText={setTitleText}
                    setActiveTitle={setActiveTitle}
                    ActiveTitle={ActiveTitle}
                    setActiveBtn = {setActiveBtn}
                />
            </div>

            <Title titleText={titleText}/>
        </>
    )
};