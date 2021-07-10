import React from "react";
import Model from "./Model/Model";

const Models = () => {
    const pathArray = [
        './assets/3d/models/stormtrooper/scene.gltf'
    ];

    return (
        <>
            {pathArray.map((path, index) => <Model key={index} path={path}/>)}
        </>

    );
}

export default Models;
