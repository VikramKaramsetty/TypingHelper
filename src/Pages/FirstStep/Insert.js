import React from 'react'
import Right from '../../components/RightOrWrong/Right';
import Wrong from '../../components/RightOrWrong/Wrong';
import { useEffect } from 'react'
import RandomLetter from '../../components/RandomLetter/RandomLetter';
import './Insert.css'
import rightHand from '../../resources/RightHand.png';
import leftHand from '../../resources/LeftHand.png';


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
    if (props.rightOrWrong) {
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
            <div className='info'>
                Correct: {props.rights}         Incorrect: {props.incorrect}
                <br />
                Percentage Correct: {props.perc}%

            </div>
            <div className='container'>
                <div className='circle'></div>
            </div>
            <div className='handsContainer'>
                <img src={leftHand} className="lefthand"></img>
                {/* <div id="space"></div> */}
                <div className='rightHandContainer'>
                    <img src={rightHand} className="righthand"></img>
                </div>

            </div>

        </div>
    )
}

export default Insert