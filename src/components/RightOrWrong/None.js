import './styles.css';
import React from 'react';

const None = props => {
    document.body.style = 'background: white;';
    
    return (
        <div>
            <h1 className='secondH1'>No Input</h1>
        </div>
    );
};

export default None;