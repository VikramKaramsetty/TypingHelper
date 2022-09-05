import { Component, useEffect } from 'react'
import './App.css';
import RandomLetter from './components/RandomLetter/RandomLetter';
import RightOrWrong from './components/RightOrWrong/RightOrWrong';

const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letter: 'A',
            pNum: -1,
            tNum: 0
        }
        this.keyDown = this.keyDown.bind(this);
    }

    componentDidMount() {
        this.setState({ letter: 'A', pNum: -1, tNum: randomNumberInRange(0, 26) })
    }

    keyDown(e) {
        this.setState({
            letter: e.key,
            pNum: this.state.tNum,
            tNum: randomNumberInRange(0, 26)
        })
    }

    render() {
        const { letter, pNum, tNum } = this.state;
        return (
            <div>
              <RandomLetter nums={this.state.tNum}/>
              <RightOrWrong keyPress={this.state.letter} nums={this.state.pNum}/>
              letter: {letter}
              <br />
              tNum: {tNum}
              <br />
              pNum: {pNum}
              <br />
              <KeyPressed keyDown={this.keyDown} />
            </div>
        );
    }
}

const KeyPressed = props => {

    useEffect(() => { // taking input and then removing it so it doesn't repeat 
        window.addEventListener('keydown', detectKeyDown);
        return () => {
            window.removeEventListener('keydown', detectKeyDown);
        };
    }, []);

    var detectKeyDown = (e) => { // what to do after detecting input
        props.keyDown(e);
    }

    return <div></div>
}