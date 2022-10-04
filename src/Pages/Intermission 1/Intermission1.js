import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion';
import './Intermission1.css';

function Intermission1() {
    return (
        <motion.div
            className="inter"

            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
            HELLO WORLD
        </motion.div>
    )
}

export default Intermission1