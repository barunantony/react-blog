import React, { useState } from 'react'

import Hamburger_icon from '../../assets/Hamburger_icon.svg';

import './Menu.scss';

const Menu = () => {
    const [toggle, setToggle] = useState(false);

    const sliderDisplay = toggle ? 'slideIn' : 'slideOut';

    return (
        <div>
            <img
                className='hamburgerIcon'
                onClick={() => {setToggle(!toggle);}}
                src={Hamburger_icon}
            >
            </img>
            <div className={`menuSidebar ${sliderDisplay}`}>
                SlideIn
            </div>
        </div>
    );
};

export default Menu;