import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = (props) => {
    return(
        <div>
            <h1>Welcome to Condue!!</h1>
            <Link to='/menu'>See Menu</Link><br/>
            <Link to='/reservation'>Make Reservation</Link><br/>
            <Link to='/patio'>Check Patio Days This Week</Link>
        </div>
    )
}

export default SplashPage;