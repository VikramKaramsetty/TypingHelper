import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion';
import './Intermission1.css';

function Intermission1(props) {
    return (
        <motion.div
            className="inter"

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
            <h1>Would you like to continue or restart?</h1>
            <h2>Rights: {props.rights}    Incorrect: {props.incorrect}</h2>
            <h2>Percentage Correct: {props.perc}%</h2>

            <div className='button'>
                <button onClick={() => { window.location.reload(false)}}>Retry</button> <button>Next Step</button>
            </div>
        </motion.div>
    )
}

export default Intermission1