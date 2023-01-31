// import { motion } from 'framer-motion';
import React, {useState,useEffect} from "react";
import './SecondStep.css';
import txt from './Words.txt';
import Axios from "axios"; // Import Axios or use Fetch.

function SecondStep() {

  //plan: make the word into a char array then make a subsequent style obj array of the same length and then when you use the map() function display every word you give the element a corresponding style in the style array
  // make a position integer to hold the index that the person is on for them to type at

  /* INPUT FROM FILE */
  const [text, setText] = useState("");

  useEffect(() => {
    Axios(txt).then(res => setText(res.data)); // This will have your text inside data attribute
  }, [])

  const words = text.split('\r\n');
  /* =========== */
  
  // let [pointer, setPointer] = useState(0);
  // let[styles, setStyles] = useState();
  let styles = []
  const KeyPressed = props => {

    useEffect(() => { // taking input and then removing it so it doesn't repeat 
      window.addEventListener('keydown', detectKeyDown);
      return () => {
        window.removeEventListener('keydown', detectKeyDown);
      };
      // eslint-disable-next-line
    }, []);

    var detectKeyDown = (e) => { // what to do after detecting input
      changeWord();
      console.log(styles[0])
      // console.log(e);
      // setPointer(pointer+1);
    }

    return <div></div>
  }

// USE A STATE
  
  function changeWord() {
    // setStyles(styles[0] = "typed")
    styles[0] = "typed";
    console.log(styles[0])
  }
  

  let wordInd = Math.floor(Math.random() * words.length); // 0-words.length-1

  
  for (let i = 0; i < words[wordInd].length; i++) {
    styles.push("unTyped");
  }

  let charString = [];
  for (let i = 0; i < words[wordInd].length; i++) {
    charString.push(words[wordInd].charAt(i));
  }


  const fullWord = charString.map((letter, ind) => {
    return (<h1 className={styles[ind]} key={letter}>{letter}</h1>)
  });



  return (
    // <motion.div
    //   className='intro'

    //   initial={{ opacity: 0, x: 100 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   exit={{ opacity: 0, x: 100 }}
    // >
    <div className='container'>
      <KeyPressed />
      {fullWord}
    </div>

    // </motion.div>
  )
}

export default SecondStep;
