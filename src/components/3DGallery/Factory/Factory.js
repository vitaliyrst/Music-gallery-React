import React from "react";

import {Box3, Vector3} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


const Factory = () => {
    const gltf = useLoader(GLTFLoader, './assets/3d/factory/scene.gltf');

    const box = new Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);

    gltf.scene.scale.multiplyScalar(1, maxAxis);
    box.setFromObject(gltf.scene);
    box.getCenter(center);
    box.getSize(size);

    gltf.scene.position.copy(center).multiplyScalar(-1);
    gltf.scene.position.y = (size.y * 0.5);
    gltf.scene.scale.set(2, 2, 2);

    return (
        <primitive object={gltf.scene}/>
    )
}

export default Factory;
