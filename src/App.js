import { Component, useEffect } from 'react'
import './App.css';
import RandomLetter from './components/RandomLetter/RandomLetter';
import RightOrWrong from './components/RightOrWrong/RightOrWrong';
import Right from './components/RightOrWrong/Right';
import Wrong from './components/RightOrWrong/Wrong';

const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letter: -1,
            pNum: -1,
            tNum: 0,
            rights: 0,
            wrongs: 0,
            rightOrWrong: false
        }
        this.keyDown = this.keyDown.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
    }


    componentDidMount() {
        this.setState({ letter: 'A', pNum: -1, tNum: randomNumberInRange(0, 26), rights: 0, wrongs: 0, rightOrWrong:false })
    }

    keyDown(e) {
        var newState = {
            letter: e.key,
            pNum: this.state.tNum,
            tNum: randomNumberInRange(0, 26),
            rights: this.state.rights,
            wrongs: this.state.wrongs,
            rightOrWrong: false
        }


        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'SPACEBAR'];

        if(newState.rights+newState.wrongs === 30) {
            console.log("over 30")
            // sends to another
        }

        document.body.style = 'background: white';
        if (newState.pNum === -1) { // making first time you load empty

        } else if (newState.letter === " " && newState.pNum === 26) {
            console.log("right, spacebar clicked")
            newState.rights++;
            // return <Right />
            newState.rightOrWrong=true;
        } else if (newState.letter === alphabet[newState.pNum]) {
            console.log("right");
            // this.updateProgress(1,0);
            newState.rights++;
            // return <Right />

            newState.rightOrWrong = true;
        } else {
            console.log("wrong");
            // this.updateProgress(0,1);
            newState.wrongs++;
            // return <Wrong />
            newState.rightOrWrong = false;
        }

        this.setState(newState);
    }

    updateProgress(rights, wrongs) {
        this.setState({
            letter: this.letter,
            pNum: this.state.pNum,
            tNum: this.state.tNum,
            rights: this.state.rights + rights,
            wrongs: this.state.wrongs + wrongs
        })
    }

    render() {
        const { letter, pNum, tNum, rights, wrongs, rightOrWrong } = this.state;

        let rightorwrong = true;
        if(rightOrWrong) {
            rightorwrong = <Right />
        } else {
            rightorwrong = <Wrong />
        }

        return (
            <div>
                <RandomLetter nums={this.state.tNum} />
                {rightorwrong}
                {/* <RightOrWrong keyPress={this.state.letter} nums={this.state.pNum} func={this.updateProgress} /> */}
                letter: {letter}
                <br />
                tNum: {tNum}
                <br />
                pNum: {pNum}
                <br />
                <KeyPressed keyDown={this.keyDown} />
                <br />
                rights: {rights}
                <br />
                wrongs: {wrongs}
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