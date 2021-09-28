import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={'/horizontal'}>Horizontal Example</NavLink></li>
                    <li><NavLink to={'/column'}>Column Example</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
