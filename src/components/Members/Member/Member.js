import React from "react";
import './Member.css';

const Member = ({data: {id, name, image, description}}) => {

    return (
        <div key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            {description.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
        </div>
    );
}

export default Member;