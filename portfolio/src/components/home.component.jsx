import React from "react";
import Profile from "./profile.component";
import AboutMe from "./about.component";
import Education from "./education.component";
import Skills from "./skills.component";
import Projects from "./projects.component";
import Contact from "./contact.component";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
    return (
        <div>
            <RevealOnScroll>
                <Profile></Profile>
            </RevealOnScroll>
            <RevealOnScroll direction="up">
                <AboutMe />
            </RevealOnScroll>
            <RevealOnScroll>
                <Education></Education>
            </RevealOnScroll>
            <RevealOnScroll>
                <Skills></Skills>
            </RevealOnScroll>
            <RevealOnScroll>
                <Projects></Projects>
            </RevealOnScroll>
            <RevealOnScroll>
                <Contact></Contact>
            </RevealOnScroll>
        </div>
    )
};

export default Home;