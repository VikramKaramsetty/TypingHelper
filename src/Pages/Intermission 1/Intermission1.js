import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion';
import './Intermission1.css';
import { useLocation } from 'react-router-dom';

function Intermission1(props) {
    const location = useLocation();
    console.log(location);
    return (
        <motion.div
            className="inter"

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
           <h1>Would you like to continue or restart?</h1>
           <p>rights: {props.rights}    incorrect: {props.incorrect}</p>
           <p>percentage: {props.perc}</p> 
        </motion.div>
    )
}

export default Intermission1