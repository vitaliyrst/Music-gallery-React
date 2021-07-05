import React from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Garage2 = () => {
    const gltf = useLoader(GLTFLoader, './assets/3d/garage/scene.gltf');
    gltf.scene.scale.set(10, 10, 10)

    /*const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());*/

    return (
        <primitive object={gltf.scene}/>
    )
}

export default Garage2;