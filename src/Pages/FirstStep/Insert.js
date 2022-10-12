import React from 'react'
import Right from '../../components/RightOrWrong/Right';
import Wrong from '../../components/RightOrWrong/Wrong';
import { useEffect } from 'react'
import RandomLetter from '../../components/RandomLetter/RandomLetter';
import './Insert.css'
import rightHand from '../../resources/RightHand.png';
import leftHand from '../../resources/LeftHand.png';
import None from '../../components/RightOrWrong/None';


function Insert(props) {

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

    let rightorwrong = true;
    if (props.first) {
        rightorwrong = <None />
    } else if (props.rightOrWrong) {
        rightorwrong = <Right />
    } else {
        rightorwrong = <Wrong />
    }

    return (

        <div>

            <RandomLetter nums={props.tNum} />
            {rightorwrong}

            <KeyPressed keyDown={props.keyDown} />
            <br />

            <div id="leftPinky" className='circle'></div>
            <div id="leftRingFinger" className='circle'></div>
            <div id="leftMiddleFinger" className='circle'></div>
            <div id="leftPointerFinger" className='circle'></div>
            <div id="leftThumb" className='circle'></div>
            <div className='bigdiv'>
                <div className='handsContainer'>
                    <img src={leftHand} className="lefthand" alt='Left Hand'></img>
                </div>

                <div className='info'>
                    Correct: {props.rights}         Incorrect: {props.incorrect}
                    <br />
                    Percentage Correct: {props.perc}%
                </div>

                <div className='handsContainer'>
                    <img src={rightHand} className="righthand" alt='Right Hand'></img>
                </div>
            </div>
            <div id="rightPinky" className='circle'></div>
            <div id="rightRingFinger" className='circle'></div>
            <div id="rightMiddleFinger" className='circle'></div>
            <div id="rightPointerFinger" className='circle'></div>
            <div id="rightThumb" className='circle'></div>
        </div>
    )
}

export default Insert