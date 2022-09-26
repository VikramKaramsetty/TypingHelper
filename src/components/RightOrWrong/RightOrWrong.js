import Right from './Right';
import Wrong from './Wrong';

const RightOrWrong = props =>  {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','SPACEBAR'];

    document.body.style = 'background: white';
    if(props.nums === -1) { // making first time you load empty
 
    

    } else if(props.keyPress === " " && props.nums === 26) {
        console.log("right, spacebar clicked")
        // props.func(1,0);
        return <Right />
    } else if(props.keyPress === alphabet[props.nums]) {
        console.log("right");
        props.func(1,0);
        
        return <Right />
    } else {
        console.log("wrong");
        // props.func(0,1);
        
        return <Wrong />
    }
}

export default RightOrWrong;