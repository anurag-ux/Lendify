import React from 'react';
import './GoogleButton.css'

const GoogleButton = () => {
  return (
    <div className="google-btn">
      <div className="btn-content">
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
        </div>
        <p className="btn-text"><b>Continue with Google</b></p>
      </div>
    </div>
  );
};

export default GoogleButton;
