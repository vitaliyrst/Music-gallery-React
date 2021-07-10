import React, {useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useAnimations} from "@react-three/drei";
import {Box3, Vector3} from "three";

const Model = (props) => {
    const model = useRef();
    const {scene, animations} = useLoader(GLTFLoader, props.path);
    const {actions, names} = useAnimations(animations, model)

    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);

    scene.scale.multiplyScalar(1, maxAxis);
    box.setFromObject(scene);
    box.getCenter(center);
    box.getSize(size);

    scene.position.copy(center).multiplyScalar(-1);
    scene.position.y = (size.y * 0.5);

    useEffect(() => {
        actions[names].play()
    }, [actions, names]);



    return (
        <primitive ref={model} object={scene}/>
    );
}

export default Model;
