import React from "react";
import Model from "./Model/Model";

const Models = () => {
    return (
        <group>
            <Model
                path='./assets/3d/models/stormtrooper/scene.gltf'
                scale={[0.4, 0.4, 0.4]}
                position={[-12, 0.8, -3]}
                rotation={[0, Math.PI / 5, 0]}
                actionNumber={0}
            />
            <Model
                path='./assets/3d/models/hiphop/scene.gltf'
                scale={[0.008, 0.008, 0.008]}
                position={[-8, 0.8, 3]}
                rotation={[0, -Math.PI / 2, 0]}
                actionNumber={0}
            />
            <Model
                path='./assets/3d/models/chief/scene.gltf'
                scale={[0.33, 0.33, 0.33]}
                position={[-8, 0.8, 1]}
                rotation={[0, -Math.PI / 2, 0]}
                actionNumber={2}
            />
            <Model
                path='./assets/3d/models/brake/scene.gltf'
                scale={[0.00008, 0.00008, 0.00008]}
                position={[-10, 0.8, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                actionNumber={0}
            />
            <Model
                path='./assets/3d/models/deadpool/scene.gltf'
                scale={[0.00007, 0.00007, 0.00007]}
                position={[-8.5, 0.8, -1]}
                rotation={[0, Math.PI, 0]}
                actionNumber={0}
            />
            <Model
                path='./assets/3d/models/spiderman/scene.gltf'
                scale={[0.5, 0.5, 0.5]}
                position={[-11, 0.8, 4]}
                rotation={[0, Math.PI, 0]}
                actionNumber={0}
            />
        </group>
    );
}

export default Models;
