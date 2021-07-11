import React from "react";

import {useSphere} from "@react-three/cannon";
import {useThree, useFrame} from "@react-three/fiber";

import {Vector3} from "three";

import Controls from "./Controls/Controls";
import usePlayerControls from './Controls/usePlayerControls';

const Player = (props) => {
    const {camera} = useThree();
    const SPEED = 5;

    const [ref, api] = useSphere(() => ({
        mass: 1, type: 'Kinematic', position: [0, 1.8, 0], ...props
    }));

    const {moveForward, moveBackward, moveLeft, moveRight} = usePlayerControls();

    useFrame(() => {
        ref.current.getWorldPosition(camera.position);

        const direction = new Vector3();
        const frontVector = new Vector3(0, 0, Number(moveBackward) - Number(moveForward));
        const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);

        api.velocity.set(direction.x, 0, direction.z);
    });


    return (
        <>
            <Controls/>
            <mesh ref={ref}/>
        </>
    )
}

export default Player;
