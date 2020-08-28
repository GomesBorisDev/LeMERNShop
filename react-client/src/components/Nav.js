import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center bg-primary">
            <Link to="/" className="navbar-brand">LeMERNShop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/sneakers" className="nav-link">Sneakers</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/apparel" className="nav-link">Apparel</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/signUp" className="nav-link">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Nav;