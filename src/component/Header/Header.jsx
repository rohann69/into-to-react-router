import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>    
            <Link to="/contact">Contact</Link>  
            <Link to="/friends">friends</Link>
            <Link to="/friend">friend</Link> 
            <Link to="/posts">Posts</Link>
        </nav>
    );
};

export default Header;