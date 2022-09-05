import './RandomLetter.css';
const RandomLetter = props => {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'SPACEBAR'];
    return (
        <div className="bigLetter">
            <h1>{alphabet[props.nums]}</h1>
        </div>
    );
};

export default RandomLetter;