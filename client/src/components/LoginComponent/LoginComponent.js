import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GoogleButton from '../GoogleButton/GoogleButton';
import Slideshow from '../Carousel/Carousel';

import './Login.css';

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // validate the form and send a request to the server
    }

    return (
        <div>
            <Slideshow />
            <h4>hello again!</h4>
            <form>
                <label className="input-group">
                    <input placeholder='username' type='text' value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                </label>
                <label className="input-group">
                    <input placeholder='password' type='password' value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </label>
                <a href="#" className="forgot-password">
                    forgot password?
                </a>
                <button className='submit-button' type="submit" onSubmit={handleSubmit}>
                    log In
                </button>
                <GoogleButton />
            </form>
            <span className='no-account'>
                <p className='text-content'>don't have an account?</p>
                <a href="/signup" className="create-account">
                    signup
                </a>
            </span>
        </div>
    );
}

export default LoginComponent;