import React from 'react'
import {NavLink} from 'react-router-dom';


import data from '../../fakeapi.json'


import './header.scss'


const Header = () => {
    return (
        <div className="head">
        <div className="logo ">{data.name}</div>
        <nav>
            
            <NavLink to="/">Home</NavLink>

            <NavLink to="/services">Services</NavLink>

            <NavLink to="/Admin">Admin</NavLink>
        </nav>
        </div>
    )
}

export default Header
