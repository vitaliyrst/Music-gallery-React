import React, {useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useAnimations} from "@react-three/drei";

const Model = ({path, scale, position, rotation, actionNumber}) => {
    const model = useRef();
    const {scene, animations} = useLoader(GLTFLoader, path);
    const {actions, names} = useAnimations(animations, model)

    useEffect(() => {
        const name = names[actionNumber];
        actions[name].play()
    }, [actionNumber, actions, names]);


    return (
        <primitive ref={model} object={scene} scale={scale} position={position} rotation={rotation}/>
    );
}

export default Model;
