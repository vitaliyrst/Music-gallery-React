import React, {useEffect} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {CubeTextureLoader} from "three";

const Env = () => {
    const three = useThree();
    const [cubeMap] = useLoader(CubeTextureLoader, [[
        './assets/3d/cube/posx.jpg',
        './assets/3d/cube/negx.jpg',
        './assets/3d/cube/posy.jpg',
        './assets/3d/cube/negy.jpg',
        './assets/3d/cube/posz.jpg',
        './assets/3d/cube/negz.jpg',
    ]]);

    useEffect(() => {
        const previous = three.scene.background;
        three.scene.background = cubeMap;
        return () => {
            three.scene.background = previous;
        };
    }, [cubeMap, three.scene]);

    return (
        <mesh/>
    );
}

export default Env;
