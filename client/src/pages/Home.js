import React from "react";
import Landing from '../components/Landing/Landing';
import CardGrid from '../components/Cards/CardGrid';

import './stylesheets/Home.css'

function Home(){
    return(
        <div>
            <Landing />
            <CardGrid />
        </div>
    );
}

export default Home;