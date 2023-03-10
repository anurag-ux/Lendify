import React, { useState } from "react";
import LoanViews from "../components/LoanViews/LoanViews";

import './stylesheets/Dashboard.css'
import LoginComponent from "../components/LoginComponent/LoginComponent";

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let component;
    if (isLoggedIn) {
        component = <LoanViews/>
    } else {
        component = <LoginComponent />
    }
    return (
        <div>
            {component}
        </div>
    );
}

export default Dashboard;