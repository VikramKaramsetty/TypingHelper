import './styles.css';
import React from 'react';

const Wrong = props => {
    document.body.style = 'background: Red;';
    return (
        <div>
            <h1 className='secondH1'>Wrong</h1>
        </div>
    );
};

export default Wrong;