import React from 'react';
import './Layout.css';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../assets/Golden Star Emblem with Daniel Init.png';

const Layout = () => {
    return(
        <div>
            <header className="portfolio-header">
            <img src={logo} alt="Logo" style={{ maxWidth: '10%', height: 'auto' }} />
            <h1>My Portfolio</h1>
            </header>
            <nav className="portfolio-nav">
                <Link to = "/">Home</Link> | <Link to ="/About">About</Link>
                | <Link to ="/Project">Project</Link> | <Link to ="/Education">Education</Link> | <Link to ="/Service">Service</Link>
                | <Link to ="/Contact">Contact</Link> | <Link to ="/Counter">Counter</Link>
            </nav>
        </div>
    )
}

export default Layout;