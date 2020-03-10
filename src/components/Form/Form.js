import React, {useState} from 'react';
import {Header} from './Header/Header';
import {Body} from './Body/Body'
import {Footer} from './Footer/Footer'

export const Form = () => {
    const [activeBtn, setActiveBtn] = useState('register');

    return (
        <div className="form">
            <Header
                setActiveBtn = {setActiveBtn}
            />
            <Body
                activeBtn = {activeBtn}
            />
            <Footer

            />
        </div>
    );
}