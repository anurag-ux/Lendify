import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../Carousel/Carousel';
import GoogleButton from '../GoogleButton/GoogleButton';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        // validate the form and send a request to the server
    }

    return (
        <div>
            <Slideshow />
            <h4>Hello Again!</h4>
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
                    Forgot password
                </a>
                <button className='submit-button' type="submit" onSubmit={handleSubmit}>
                    Log In
                </button>
                <GoogleButton/>
            </form>
        </div>
    )
}

export default Login;