import React from "react";
import Profile from "./profile.component";
import AboutMe from "./about.component";
import Education from "./education.component";
import Skills from "./skills.component";
import Projects from "./projects.component";
import Contact from "./contact.component";


const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
};

export default Home;