import React, {useEffect, useRef, useState} from "react";
import './TV.css';
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Vector3} from "three";
import {Html} from "@react-three/drei";

const TV = () => {
    const gltfRef = useRef();
    const iframeRef = useRef();
    const refQ = useRef();
    const refE = useRef();
    const refR = useRef();
    const selectRef = useRef();

    const [near, setNear] = useState(false);
    const [tvOnOff, setTvOnOff] = useState(false);
    const [selectOnOff, setSelectOnOff] = useState(false);
    const [vector1] = useState(() => new Vector3());
    const [vector2] = useState(() => new Vector3());

    const {camera} = useThree();
    const gltf = useLoader(GLTFLoader, './assets/3d/tv/scene.gltf');

    useEffect(() => {
        gltf.scene.scale.set(0.12, 0.12, 0.12);
        gltf.scene.position.set(-13.13, 3.2, 0.3);
        gltf.scene.rotation.set(0, Math.PI / 2, 0);


        const handleKeyDown = (eo) => {
            if (near) {
                if (eo.key === 'q') {
                    refQ.current.style.borderColor = 'blue';
                    setTvOnOff(!tvOnOff);
                }
                if (eo.key === 'e' && tvOnOff) {
                    refE.current.style.borderColor = 'blue';
                    iframeRef.current.src += '?autoplay=1&mute=1';
                }
                if (eo.key === 'r' && tvOnOff) {
                    refR.current.style.borderColor = 'blue';
                    setSelectOnOff(!selectOnOff);
                    setTimeout(() => {
                        selectRef.current.focus();
                    }, 100);
                }
                if (eo.key === 'Enter' && tvOnOff) {
                    iframeRef.current.src = eo.target.value;
                    setSelectOnOff(false);
                }
            }
        }

        const handleKeyUp = (eo) => {
            if (eo.key === 'q') {
                refQ.current.style.borderColor = 'red';
            }
            if (eo.key === 'e') {
                refE.current.style.borderColor = 'red';
            }
            if (eo.key === 'r') {
                refR.current.style.borderColor = 'red';
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    }, [selectOnOff, tvOnOff, near, gltf]);

    useFrame(() => {
        vector1.copy(camera.position);
        vector2.copy(gltfRef.current.position);

        let distance = vector1.distanceTo(vector2);

        if (distance < 7 && !near) {
            setNear(true);
        }
        if (distance > 7 && near) {
            setNear(false);
        }
    });

    const getOverlay = () => {
        return (
            <mesh position={[-13.13, 3.2, 0.3]} rotation={[0, Math.PI / 2, Math.PI]}>
                <planeGeometry/>
                <meshStandardMaterial/>
                <Html distanceFactor={-1} position={[0, 0, 0.1]} transform occlude={true}>
                    <iframe ref={iframeRef} width="700" height="400" src="https://www.youtube.com/embed/LhlASZXjSbw"
                            title="YouTube video player" frameBorder="0"
                            allow='autoplay'
                    />
                </Html>
            </mesh>
        )
    }


    const getControlPanel = () => {
        return (
            <mesh>
                <planeGeometry/>
                <meshStandardMaterial/>
                <Html distanceFactor={0} position={[-10, 1.5, 0.3]} transform rotation={[0, Math.PI / 2, 0]}>
                    <ul className='control_panel_list'>
                        <li ref={refQ} className='control_panel_item'>
                            <div className='control_panel_key'>Press Q</div>
                            <div className='control_panel_action'>ON/OFF</div>
                        </li>
                        <li ref={refE} style={{opacity: !tvOnOff ? '0.3' : '1'}} className='control_panel_item'>
                            <div className='control_panel_key'>Press E</div>
                            <div className='control_panel_action'>Play</div>
                        </li>
                        <li ref={refR} style={{opacity: !tvOnOff ? '0.3' : '1'}} className='control_panel_item'>
                            <div className='control_panel_key'>Press R</div>
                            <div className='control_panel_action'>Songs</div>
                        </li>
                    </ul>
                </Html>
            </mesh>
        )
    }

    const getSelectPanel = () => {
        return (
            <mesh>
                <planeGeometry/>
                <meshStandardMaterial/>
                <Html distanceFactor={0} position={[2.5, 8.8, -17]} transform>
                    <select ref={selectRef} size='5'>
                        <option value='https://www.youtube.com/embed/6dqujrkYnDE'>Blood In My Eyes</option>
                        <option value='https://www.youtube.com/embed/QvhYD47tlcU'>Baby You Don't Wanna Know</option>
                        <option value='https://www.youtube.com/embed/fbqsGxm7iLQ'>Goddamn I'm Dead Again</option>
                        <option value='https://www.youtube.com/embed/o5fuqdczxEE'>War</option>
                        <option value='https://www.youtube.com/embed/LhlASZXjSbw'>God Save Us All</option>
                        <option value='https://www.youtube.com/embed/3A27bHME73I'>Out For Blood</option>
                    </select>
                </Html>
            </mesh>
        )
    }

    return (
        <>
            {tvOnOff && getOverlay()}
            {near && getControlPanel()}
            {selectOnOff && getSelectPanel()}
            <primitive
                ref={gltfRef}
                object={gltf.scene}
            />
        </>
    )
}

export default TV;
