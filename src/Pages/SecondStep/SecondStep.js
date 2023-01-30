import { motion } from 'framer-motion';
import React, { Component } from 'react';
import './SecondStep';

function SecondStep() {

  //plan: make the word into a char array then make a subsequent style obj array of the same length and then when you use the map() function display every word you give the element a corresponding style in the style array

  const words = [
    "have",
    "there",
    "my",
    "name",
    "tame",
    "hate",
    "road",
    "where"
  ];

  let wordInd = Math.floor(Math.random() * words.length); // 0-words.length-1

  let styles = [];
  for (let i = 0; i < words[wordInd].length; i++) {
    styles.push("unTyped");
  }

  let charString = [];
  for (let i = 0; i < words[wordInd].length; i++) {
    charString.push(words[wordInd].charAt(i));
  }

  const fullWord = charString.map((letter, ind) => {
    console.log(ind);
     return (<h1 className='unTyped' key={letter}>{letter}</h1>)
  });


  return (
    // <motion.div
    //   className='intro'

    //   initial={{ opacity: 0, x: 100 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   exit={{ opacity: 0, x: 100 }}
    // >
    <div className='unTyped'>

      {fullWord}
      <h1 className='untyped'>aaaa</h1>
    </div>
    // </motion.div>
  )
}

export default SecondStep;
