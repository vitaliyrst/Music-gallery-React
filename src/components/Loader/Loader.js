import React from "react";
import './Loader.css';

import Loader from "react-loader-spinner";

const Fallback = ({type, color, width, height}) => {
    return (
        <Loader className='loader' type={type} color={color} width={width} height={height}/>
    );
}

export default Fallback;