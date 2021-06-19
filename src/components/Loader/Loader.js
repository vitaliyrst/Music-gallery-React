import React from "react";
import Loader from "react-loader-spinner";
import './Loader.css';

const Fallback = ({type, color, width, height}) => {
    return (
        <Loader className='loader' type={type} color={color} width={width} height={height}/>
    );
}

export default Fallback;