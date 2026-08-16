import React from "react";
import Profile from "./profile.component";
import AboutMe from "./about.component";
import Education from "./education.component";


const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Education></Education>
        </div>
    )
};

export default Home;