import React from "react";

import {useLoader} from "@react-three/fiber";
import {usePlane} from "@react-three/cannon";

import {RepeatWrapping, TextureLoader} from "three";

const Ground = () => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}));

    const geometry = <planeGeometry args={[150, 150]}/>

    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        './assets/3d/grounds/ground/ground_color.jpg',
        './assets/3d/grounds/ground/ground_displacement.jpg',
        './assets/3d/grounds/ground/ground_normal.jpg',
        './assets/3d/grounds/ground/ground_roughness.jpg',
        './assets/3d/grounds/ground/ground_ao.jpg'
    ]);

    colorMap.wrapS = RepeatWrapping;
    aoMap.wrapS = RepeatWrapping;
    displacementMap.wrapS = RepeatWrapping;
    normalMap.wrapS = RepeatWrapping;
    roughnessMap.wrapS = RepeatWrapping;

    colorMap.wrapT = RepeatWrapping;
    aoMap.wrapT = RepeatWrapping;
    displacementMap.wrapT = RepeatWrapping;
    normalMap.wrapT = RepeatWrapping;
    roughnessMap.wrapT = RepeatWrapping;

    return (
        <mesh ref={ref} receiveShadow={true}>
            {geometry}
            <meshStandardMaterial
                map={colorMap}
                aoMap={aoMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                map-repeat={[25, 25]}
            />
        </mesh>
    )
}

export default Ground;