import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import FirstStep from './../Pages/FirstStep/FirstStep';
import Intro from './../Pages/Intro/Intro';
import Intermission1 from '../Pages/Intermission 1/Intermission1';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Intro />} />
                <Route path="/First-Step" element={<FirstStep />} />
                <Route path="/Intermission1" element={<Intermission1 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes