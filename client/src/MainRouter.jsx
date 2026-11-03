import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ClickButton from './components/Counter';
import Project from './components/Project';
import Education from './components/Education';
import Service from './components/Service';
import Contact from './components/Contact';

const MainRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element = {<About />} />
            <Route exact path="/Counter" element = {<ClickButton />} />
            <Route exact path="/Project" element = {<Project />} />
            <Route exact path="/Education" element = {<Education />} />
            <Route exact path="/Service" element = {<Service />} />
            <Route exact path="/Contact" element = {<Contact />} />
        </Routes>
    )}

export default MainRouter;