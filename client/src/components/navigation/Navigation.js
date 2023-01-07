import React from 'react';
import './navigation.css';

function Navigation() {
    return (
        <div>
            <nav>
                <h2>lendify</h2>
                <ul>
                    <li><a href="/#" className='active'>Home</a></li>
                    <li><a href="/#" className='inactive'>How it Works</a></li>
                    <li><a href="/#" className='inactive'>About Us</a></li>
                    <li><a href="/#" className='inactive'>Contact</a></li>
                    <a className='download' href="/#" >Dashboard</a>
                </ul>
            </nav>
            <hr className='header-divider'></hr>
        </div>
    );
}

export default Navigation;