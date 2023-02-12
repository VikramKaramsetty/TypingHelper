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
  
  let [pointer, setPointer] = useState(0);
  let[styles, setStyles] = useState([]);

  const KeyPressed = props => {

    useEffect(() => { // taking input and then removing it so it doesn't repeat 
      window.addEventListener('keydown', detectKeyDown);
      return () => {
        window.removeEventListener('keydown', detectKeyDown);
      };
      // eslint-disable-next-line
    }, []);

    var detectKeyDown = (e) => { // what to do after detecting input
      changeWord(pointer,e);
      setPointer(pointer+1);
      console.log(e + " " + pointer)
      // console.log(e);
      // setPointer(pointer+1);
    }

    return <div></div>
  }


  const badKeys = ['Control', 'Alt', 'Enter', 'Shift'];
// USE A STATE
  function changeWord(index, keyInfo) {
    const updateStyle = styles.map((value, ind) => {
      // SUPPOSED TO IGNORE BAD KEYS
      // if(badKeys.includes(keyInfo.key)) {
      //   setPointer(); // sets the pointer back one so it does not count
      //   console.log("first: " + pointer)
      //   return "unTyped";
      // } 
      // ===============
       if (ind === index && keyInfo.key == words[wordInd].charAt(pointer)) { // seeing if its the right letter
        // Increment the clicked counter
        return "correct";
      } else if(ind === index ){ // seeing if its the right letter
        // The rest haven't changed
        return "wrong";
      } else { // seeing if its a random letter
        return styles[ind]
      }
    });
    setStyles(updateStyle);
  }


  function updateWord() {
    setTimeout(() => { // adding a timeout so you can see last letter
      setWordInd(Math.floor(Math.random() * words.length));
      let newStyle = [];
      for (let i = 0; i < words[wordInd].length; i++) {
        newStyle.push("unTyped");
      }
      setPointer(0);
      setStyles(newStyle);
    }, 500);
    
  }
  

  // let wordInd = Math.floor(Math.random() * words.length); // 0-words.length-1
  const[wordInd, setWordInd] = useState(Math.floor(Math.random() * words.length)); // starts with the first one 
  
  
  for (let i = 0; i < words[wordInd].length; i++) {
    styles.push("unTyped");
  }


  let charString = [];
  for (let i = 0; i < words[wordInd].length; i++) {
    charString.push(words[wordInd].charAt(i));
  }


  const fullWord = charString.map((letter, ind) => {
    if(pointer == words[wordInd].length) {
      console.log("aa")
      updateWord();
      return (<h1 className={styles[ind]} key={ind}>{letter}</h1>)
    } else {
      return (<h1 className={styles[ind]} key={ind}>{letter}</h1>)
    }
    
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
