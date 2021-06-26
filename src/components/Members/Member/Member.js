import React from "react";
import './Member.css';

const Member = ({data: {id, name, image, description}}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            {description.map(item => {
                return <p>{item}</p>
            })}
        </div>
    );
}

export default Member;