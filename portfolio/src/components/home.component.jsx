import React from "react";
import Profile from "./profile.component";
import AboutMe from "./about.component";
import Education from "./education.component";
import Skills from "./skills.component";


const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
        </div>
    )
};

export default Home;