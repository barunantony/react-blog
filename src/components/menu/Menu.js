import React, { useState } from 'react'

import { Home } from '../index'; 

import Hamburger_icon from '../../assets/Hamburger_icon.svg';
import './Menu.scss';

const Menu = ({ history, location }) => {
    const [toggle, setToggle] = useState(null);

    history.listen((location, action) => {
        // close side menu if route changed
        setToggle(false);
        const sidebarParam = location.search
            .slice(1)
            .split('&')
            .filter((queryParam) => (queryParam.split('=')[0]=== 'sidebar'));

        if(
            sidebarParam && sidebarParam.length > 0 &&
            (sidebarParam[0].split('=')[1] === 'open')
        ) {
            setToggle(true);
        }
    });

    const sliderDisplay = (toggle === null) ? '' : (toggle ? 'slideIn' : 'slideOut');

    return (
        <div className='menuHeader'>
            <img
                alt='munu icon'
                className='hamburgerIcon'
                onClick={() => {setToggle(true);}}
                src={Hamburger_icon}
            >
            </img>
            <h1>Blog</h1>
            <div className={`menuSidebar ${sliderDisplay}`}>
                <Home />
            </div>
            {
                toggle && 
                <div className='overlay' onClick={() => {setToggle(false);}}></div>
            }
        </div>
    );
};

export default Menu;