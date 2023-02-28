import React from 'react'
import Right from '../../components/RightOrWrong/Right';
import Wrong from '../../components/RightOrWrong/Wrong';
import { useEffect } from 'react'
import RandomLetter from '../../components/RandomLetter/RandomLetter';
import './Insert.css'
import rightHand from '../../resources/RightHand.png';
import leftHand from '../../resources/LeftHand.png';
import None from '../../components/RightOrWrong/None';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Insert(props) {

    const KeyPressed = props => {

        useEffect(() => { // taking input and then removing it so it doesn't repeat 
            window.addEventListener('keydown', detectKeyDown);
            return () => {
                window.removeEventListener('keydown', detectKeyDown);
            };
            // eslint-disable-next-line
        }, []); 

        var detectKeyDown = (e) => { // what to do after detecting input
            props.keyDown(e);
        }

        return <div></div>
    }

    let rightorwrong = true;
    if (props.first) {
        rightorwrong = <None />
    } else if (props.rightOrWrong) {
        rightorwrong = <Right />
    } else {
        rightorwrong = <Wrong />
    }

    let leftPinky = 'circle';
    let leftRingFinger = 'circle';
    let leftMiddleFinger = 'circle';
    let leftPointerFinger = 'circle' ;
    let leftThumb = 'circle' ;
    let rightPinky = 'circle' ;
    let rightRingFinger = 'circle';
    let rightMiddleFinger = 'circle' ;
    let rightPointerFinger = 'circle';
    let rightThumb = 'circle';
    
    let num = props.tNum;

    const mql = window.matchMedia('(max-width: 100px)');


    if(num === 0) { //a
        leftPinky = 'filledCircle ';
    } else if(num === 1) { // b
        leftPointerFinger = 'filledCircle'
        rightPointerFinger = 'filledCircle'
    } else if(num === 2) { // c
        leftPointerFinger = 'filledCircle'
    } else if(num === 3) { // d
        leftMiddleFinger = 'filledCircle'
    } else if(num === 4) { //e 
        leftMiddleFinger = 'filledCircle'
    } else if(num === 5) { // f
        leftPointerFinger = 'filledCircle'
    } else if(num === 6) { //g
        leftPointerFinger = 'filledCircle'
    } else if(num === 7) { //h
        rightPointerFinger = 'filledCircle'
    } else if(num === 8) { //i
        rightMiddleFinger = 'filledCircle'
    } else if(num === 9) { //j
        rightPointerFinger = 'filledCircle'
    } else if(num === 10) { //k
        rightMiddleFinger = 'filledCircle'
    } else if(num === 11) { //l
        rightRingFinger = 'filledCircle'
    } else if(num === 12) { //m
        rightPointerFinger = 'filledCircle'
    } else if(num === 13) { //n
        rightPointerFinger = 'filledCircle'
    } else if(num === 14) { //o
        rightRingFinger = 'filledCircle'
    } else if(num === 15) { //p
        rightRingFinger = 'filledCircle'
    } else if(num === 16) { //q
        leftRingFinger = 'filledCircle'
    } else if(num === 17) { //r
        leftPointerFinger = 'filledCircle'
    } else if(num === 18) { //s
        leftRingFinger = 'filledCircle'
    } else if(num === 19) { //t
        leftPointerFinger = 'filledCircle'
    } else if(num === 20) { //u
        rightPointerFinger = 'filledCircle'
    } else if(num === 21) { //v
        leftPointerFinger = 'filledCircle'
    } else if(num === 22) { //w
        leftRingFinger = 'filledCircle'
    } else if(num === 23) { //x
        leftRingFinger = 'filledCircle'
    } else if(num === 24) { //y
        rightPointerFinger = 'filledCircle'
    } else if(num === 25) { //z
        leftPinky = 'filledCircle'
    } else if(num === 26) { // spacebar
        leftThumb = 'filledCircle'
    }
    const [checked, setChecked] = React.useState(false);
    if(checked) {
        rightRingFinger = 'hide';
        rightMiddleFinger = 'hide';
        rightPinky = 'hide';
        rightThumb = 'hide';
        rightPointerFinger = 'hide'
        leftRingFinger = 'hide';
        leftMiddleFinger = 'hide';
        leftPinky = 'hide';
        leftThumb = 'hide';
        leftPointerFinger = 'hide'
    } 

    const onChecked = (event) => { // updating state
        setChecked(event.target.checked);
    }

    return (

        <div>

            <RandomLetter nums={props.tNum} />
            {rightorwrong}

            <KeyPressed keyDown={props.keyDown} />
            <br />

            <div id="leftPinky" className={leftPinky }></div>
            <div id="leftRingFinger" className={leftRingFinger}></div>
            <div id="leftMiddleFinger" className={leftMiddleFinger}></div>
            <div id="leftPointerFinger" className={leftPointerFinger}></div>
            <div id="leftThumb" className={leftThumb}></div>
            <div className='bigdiv'>
                <div className='handsContainer'>
                    <img src={leftHand} className="lefthand" alt='Left Hand'></img>
                </div>

                <div className='info'>
                    Correct: {props.rights}         Incorrect: {props.incorrect}
                    <br />
                    Percentage Correct: {props.perc}%
                    <br />
                    <br />
                    <br />
                    <br />
                    <FormControlLabel control={<Switch size="large" color="default" checked={checked} onChange={onChecked}/>} label={<h1>Hide Fingers</h1>} />

                </div>
                
                <div className='handsContainer'>
                    <img src={rightHand} className="righthand" alt='Right Hand'></img>
                </div>
            </div>
            <div id="rightPinky" className={rightPinky}></div>
            <div id="rightRingFinger" className={rightRingFinger}></div>
            <div id="rightMiddleFinger" className={rightMiddleFinger}></div>
            <div id="rightPointerFinger" className={rightPointerFinger}></div>
            <div id="rightThumb" className={rightThumb}></div>
        </div>
    )
}

export default Insert