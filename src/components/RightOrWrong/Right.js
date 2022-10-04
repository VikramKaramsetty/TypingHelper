import './styles.css';
import React from 'react';

const Right = props => {
    document.body.style = 'background: green;';
    
    return (
        <div>
            <h1 className='secondH1'>Right</h1>
        </div>
    );
};

export default Right;