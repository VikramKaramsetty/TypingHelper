import Right from './Right/Right';
import Wrong from './Wrong/Wrong';

const RightOrWrong = props =>  {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


    document.body.style = 'background: white';
    if(props.keyPress == alphabet[props.nums]) {
        console.log("right");
        return <Right />
        // return (
        //     <div>
        //         right
        //     </div>
        // )
    } else {
        console.log("wrong")
        return <Wrong />
        // return (
        //     <div>
        //         wrong
        //     </div>
        // )
    }
}

export default RightOrWrong;