import React, {useEffect} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {CubeTextureLoader} from "three";
import {useBox} from "@react-three/cannon";

const Factory = () => {
    const three = useThree();

    const gltf = useLoader(GLTFLoader, './assets/3d/factory/scene.gltf');
    const [ref] = useBox(() => ({ mass: 1, position: [0, 1, 0]}))

/*    const [cubeMap] = useLoader(CubeTextureLoader, [[
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
    }, [cubeMap, three.scene]);*/



/*    const box = new Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);

    gltf.scene.scale.multiplyScalar(1, maxAxis);
    box.setFromObject(gltf.scene);
    box.getCenter(center);
    box.getSize(size);

    gltf.scene.position.copy(center).multiplyScalar(-1);
    gltf.scene.position.y = (size.y * 0.5);
    gltf.scene.scale.set(2, 2, 2);*/

    /* const refa = useRef();
     const {scene, animations} = useLoader(GLTFLoader, './assets/3d/flex/scene.gltf');
     const {ref, actions, names} = useAnimations(animations, refa);

     useEffect(() => {
         actions[names].play()
     }, [actions]);*/

    /*gltfdance.scene.scale.set(2,2,2);

    console.log(gltfdance.animations)
    const mixer = new AnimationMixer();

    useEffect(() => {
        mixer.clipAction(gltfdance.animations[0]).play();
    },[])*/
    /*mixer.clipAction()*/
    /*const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());*/
    /*    {/!*<primitive position={[0, 5, -7]} ref={refa} object={scene}/>*!/}*/
    return (
        <mesh ref={ref}>
            <primitive object={gltf.scene}/>
        </mesh>
    )
}

export default Factory;
