import React from "react";

import {Box3, TextureLoader, Vector3, RepeatWrapping} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Factory = () => {
    const colorMap = useLoader(TextureLoader, './assets/3d/factory/wall.png');
    colorMap.wrapS = RepeatWrapping;
    colorMap.wrapT = RepeatWrapping;

    const gltf = useLoader(GLTFLoader, './assets/3d/factory/scene.gltf');
    const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());

    gltf.scene.getObjectByName('Plane008').position.set(1, 4, 0);
    gltf.scene.getObjectByName('Plane009').position.set(1, 4, 0);
    gltf.scene.getObjectByName('Plane010').position.set(1, 4, 0);

    return (
        <>
            <mesh position={[9.2, 3, -3.31]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4.3, 5]}/>
                <meshStandardMaterial map={colorMap} doubleSide={true}/>
            </mesh>
            <primitive object={gltf.scene} scale={[3, 3, 3]} position={[-3, size.y * 0.5, size.z * 0.17]}/>
        </>
    )
}

export default Factory;
