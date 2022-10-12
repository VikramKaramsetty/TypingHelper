import React from 'react'
import { useNavigate } from "react-router-dom";
import './Intro.css';
import { motion } from 'framer-motion';

function Intro() {
  let navigate = useNavigate();
  return (
    <motion.div
      className='intro'

      initial = {{opacity: 0, x:100}}
      animate = {{opacity: 1, x:0}}
      exit = {{opacity:0, x:100}}
    >
      <h1>Welcome to typing helper!</h1>
      <h2>Let us start off with some basic keyboard rules to start!</h2>
      <br />
      <h2>Keep your left pointer finger on the F key, and your right pointer finger on the J key.</h2>
      <h2>From here, you want to lay the rest of your fingers on ASD and KL;</h2>
      <h2>This method of typing makes it the easiest to reach other letters.</h2>
      <h2>Now, I recommend putting a paper over your keyboard (or practicing till you can do so) and trying to get the letters on the keyboard right. This will help reduce the tendency to look at the keyboard.</h2>
      <button className='button-4' onClick={() => { navigate("/First-Step") }}>Part One</button>
    </motion.div>

  )
}

export default Intro;