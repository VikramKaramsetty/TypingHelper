import React from 'react'
import { useNavigate } from 'react-router-dom';

function IntermissionTransmitter1() {
    let navigate = useNavigate();
    return (
        navigate("/Intermission1")
    )
}

export default IntermissionTransmitter1