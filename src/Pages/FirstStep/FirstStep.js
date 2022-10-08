import { Component } from 'react'
import './FirstStep.css';
import React from 'react';
import Intermission1 from '../../components/Intermission 1/Intermission1';
import Insert from './Insert';

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
            first: true,
            rightOrWrong: false,
            percentage: 0,
            isFifty: false
        }
        this.keyDown = this.keyDown.bind(this);
    }


    componentDidMount() {
        this.setState({ letter: 'A', pNum: -1, tNum: randomNumberInRange(0, 26), rights: 0, wrongs: 0, rightOrWrong: false, percentage: 0, isFifty: false, first: true })
    }

    keyDown(e) {

        var newState = {
            letter: e.key,
            pNum: this.state.tNum,
            tNum: randomNumberInRange(0, 26),
            rights: this.state.rights,
            wrongs: this.state.wrongs,
            rightOrWrong: false,
            percentage: this.state.rights / (this.state.rights + this.state.wrongs),
            isFifty: this.state.isFifty,
            first: true,
        }

        if (newState.rights + newState.wrongs === 49) {
            newState.isFifty = true;
        }

        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'SPACEBAR'];

        document.body.style = 'background: white';
        if (newState.pNum === -1) { // making first time you load empty

        } else if (newState.letter === " " && newState.pNum === 26) {
            console.log("right, spacebar clicked")
            newState.rights++;
            // return <Right />
            newState.rightOrWrong = true;
            newState.first = false;
        } else if (newState.letter === alphabet[newState.pNum]) {
            console.log("right");
            // this.updateProgress(1,0);
            newState.rights++;
            // return <Right />
            newState.first=false;
            newState.rightOrWrong = true;
        } else {
            console.log("wrong");
            newState.wrongs++;
            newState.rightOrWrong = false;
            newState.first = false;
        }

        this.setState(newState);
    }

    render() {
        // eslint-disable-next-line
        const {tNum, rights, wrongs, rightOrWrong, percentage, isFifty, first } = this.state;

        // PERCENTAGE IS ONE BEHIND, SIMILAR TO PREVIOUS ISSUE
        let perc = (percentage * 100).toFixed(0) // cutting the percentage up till the last 2 decimal points

        let nav = <Insert tNum={tNum} rights={rights} incorrect={wrongs} perc={perc} rightOrWrong={rightOrWrong} keyDown={this.keyDown} first={first}/>;
        if (isFifty === true) {
            nav = <Intermission1 rights={rights} incorrect={wrongs} perc={perc}/>
        } 

        return (
            <div>
                {nav}
                
            </div>
        );
    }
}


export default FirstStep;