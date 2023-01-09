import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GoogleButton from '../GoogleButton/GoogleButton';
import Slideshow from '../Carousel/Carousel';

import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // validate the form and send a request to the server
    }

    return (
        <div>
            <Slideshow />
            <h4>hey there!</h4>
            <form>
                <label className="input-group">
                    <input placeholder='username' type='text' value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                </label>
                <label className="input-group">
                    <input placeholder='email' type='email' value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </label>
                <label className="input-group">
                    <input placeholder='password' type='password' value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </label>
                <label className="input-group">
                    <input placeholder='confirm password' type='password' value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                    />
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                </label>
                <button className='submit-button' type="submit" onSubmit={handleSubmit}>
                    sign up
                </button>
                <GoogleButton />
            </form>
            <span className='already-account'>
                <p className='text-content'>already have an account?</p>
                <a href="/dashboard" className="login-link">
                    login
                </a>
            </span>
        </div>
    )
}

export default Signup;
