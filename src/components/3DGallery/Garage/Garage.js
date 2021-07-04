import React from "react";
import {DoubleSide, RepeatWrapping, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";

const Garage = () => {

    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        './assets/3d/walls/wall1/wall_color.jpg',
        './assets/3d/walls/wall1/wall_displacement.jpg',
        './assets/3d/walls/wall1/wall_normal.jpg',
        './assets/3d/walls/wall1/wall_roughness.jpg',
        './assets/3d/walls/wall1/wall_ao.jpg'
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

    const getPlane = (size, position, rotation) => {
        return (
            <mesh position={position} rotation={rotation}>
                <planeGeometry args={size}/>
                <meshStandardMaterial
                    map={colorMap}
                    aoMap={aoMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    map-repeat={[1, 1]}
                    side={DoubleSide}
                />
            </mesh>
        )
    }

    return (
        <group>
            {getPlane([101, 40], [-50, 20, 0], [0, Math.PI / 2, 0])}
            {getPlane([101, 40], [0, 20, -50], [0, 0, 0])}
            {getPlane([101, 40], [0, 20, 50], [0, 0, 0])}
            {getPlane([101, 40], [50, 20, 0], [0, Math.PI / 2, 0])}
        </group>
    )
}

export default Garage;