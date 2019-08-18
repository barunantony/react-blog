import React from 'react'

import Hamburger_icon from '../../assets/Hamburger_icon.svg';

import './Menu.scss';

const Menu = () => (
    <div>
        <img
            className='hamburgerIcon'
            src={Hamburger_icon}
        >
        </img>
        <div className='slideIn'>
            SlideIn
        </div>
    </div>
);

export default Menu;