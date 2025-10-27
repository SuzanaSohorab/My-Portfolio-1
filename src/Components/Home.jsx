import React from 'react';
import Banner from './Banner';
import AboutMe from '../Pages/AboutMe';
import Education from '../Pages/Education';
import Projects from '../Pages/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;