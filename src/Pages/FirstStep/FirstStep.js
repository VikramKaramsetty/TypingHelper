import { Component, useEffect } from 'react'
import './FirstStep.css';
import { Link, useNavigate } from 'react-router-dom';
import RandomLetter from '../../components/RandomLetter/RandomLetter';
import Right from '../../components/RightOrWrong/Right';
import Wrong from '../../components/RightOrWrong/Wrong';
import React from 'react';

const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class FirstStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letter: -1,
            pNum: -1,
            tNum: 0,
            rights: 0,
            wrongs: 0,
            rightOrWrong: false,
            percentage: 0
        }
        this.keyDown = this.keyDown.bind(this);
    }


    componentDidMount() {
        this.setState({ letter: 'A', pNum: -1, tNum: randomNumberInRange(0, 26), rights: 0, wrongs: 0, rightOrWrong: false, percentage: 0 })
    }

    keyDown(e) {

        var newState = {
            letter: e.key,
            pNum: this.state.tNum,
            tNum: randomNumberInRange(0, 26),
            rights: this.state.rights,
            wrongs: this.state.wrongs,
            rightOrWrong: false,
            percentage: this.state.rights / (this.state.rights + this.state.wrongs)
        }


        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'SPACEBAR'];




        document.body.style = 'background: white';
        if (newState.pNum === -1) { // making first time you load empty

        } else if (newState.letter === " " && newState.pNum === 26) {
            console.log("right, spacebar clicked")
            newState.rights++;
            // return <Right />
            newState.rightOrWrong = true;
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

    render() {
        // eslint-disable-next-line
        const { letter, pNum, tNum, rights, wrongs, rightOrWrong, percentage } = this.state;

        let rightorwrong = true;
        if (rightOrWrong) {
            rightorwrong = <Right />
        } else {
            rightorwrong = <Wrong />
        }

        // PERCENTAGE IS ONE BEHIND, SIMILAR TO PREVIOUS ISSUE
        let perc = (percentage * 100).toFixed(0) // cutting the percentage up till the last 2 decimal points

        return (
            <div>
                <RandomLetter nums={this.state.tNum} />
                {rightorwrong}

                {/* letter: {letter}
                <br />
                tNum: {tNum}
                <br />
                pNum: {pNum}
                <br /> */}
                <KeyPressed keyDown={this.keyDown} />
                <br />
                <div className='info'>
                    Correct: {rights}         Incorrect: {wrongs}
                    <br />
                    Percentage Correct: {perc}%

                </div>

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
export default FirstStep;