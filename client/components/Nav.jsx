import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="tabs">
            <ul>
                <Link to="/profile">Your Profile</Link>
                <Link to='/logout' onClick = {props.handleLogout} >Logout</Link>
            </ul>
        </div>
    )
}

export default Nav