import React, { useState, useEffect } from 'react';
import './navigation.css';

function Navigation() {
    const [navbarLinks, setNavbarLinks] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8080/navbarLinks');
            const navbarLinks = await response.json();
            setNavbarLinks(navbarLinks);
        }
        fetchData();
    }, []);
    return (
        <div>
            <nav>
                <h2><a className='brand' href='/'><img src='https://svgshare.com/i/pPT.svg' alt='brand-logo'></img>
                    lendify
                    </a>
                </h2>
                <ul>
                    <li><a href="/" className='active'>Home</a></li>
                    <li><a href="/whitepaper" className='inactive'>How it Works</a></li>
                    <li><a href="/contact" className='inactive'>Contact</a></li>
                    <a className='download' href="/dashboard" >Dashboard</a>
                </ul>
            </nav>
            <hr className='header-divider'></hr>
        </div>
    );
}

export default Navigation;