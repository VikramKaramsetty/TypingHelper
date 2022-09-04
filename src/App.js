import './App.css';
import RandomLetter from './components/RandomLetter/RandomLetter';
import { useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState(randomNumberInRange(0,26)); // starting off num as a random number

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  useEffect(() => { // taking input and then removing it so it doesn't repeat 
    window.addEventListener('keydown', detectKeyDown);
    return () => {
      window.removeEventListener('keydown', detectKeyDown);
    };
  }, []);

  const detectKeyDown = (e) => { // what to do after detecting input
    setNum(randomNumberInRange(0,26))
    console.log(e.key)
  }

  return (
    <div>
      <RandomLetter nums={num} />
    </div>
  );
}

export default App;
