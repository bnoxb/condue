import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = (props) => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/reservation'>Reservations</Link>
                </li>
                <li>
                    <Link to='/patio'>Patio Days</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
   
export default Header;