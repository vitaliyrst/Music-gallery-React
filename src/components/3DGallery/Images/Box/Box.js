import React, {useRef, useState} from "react";
import './Box.css';
import {Html} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {Vector3} from "three";

const Box = ({position, rotation, album}) => {
    const ref = useRef();
    const {camera} = useThree();

    const [near, setNear] = useState(false);
    const [vector1] = useState(() => new Vector3());
    const [vector2] = useState(() => new Vector3());

    useFrame(() => {
        vector1.copy(camera.position);
        vector2.copy(ref.current.position);

        let distance = vector1.distanceTo(vector2);

        if (distance < 3 && !near) {
            setNear(true);
        }
        if (distance > 3 && near) {
            setNear(false);
        }
    });

    const getAlbumInformation = () => {
        const description = album.description.find(item => {
            return item.hasOwnProperty('p');
        });

        return (
            <mesh>
                <planeGeometry/>
                <meshStandardMaterial/>
                <Html distanceFactor={0} position={position} transform>
                    <div className='gallery3d_album_description_container'>
                        <div className='gallery3d_album_description_wrapper'>
                            {description['p'].map((text, index) => (
                                <p key={index} className='gallery3d_album_description'>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                </Html>
            </mesh>
        )
    }

    return (
        <>
            {near && getAlbumInformation()}
            <mesh ref={ref} position={position} rotation={[0, 0, -Math.PI]}>
                <meshStandardMaterial color={'#000000'}/>
                <boxGeometry args={[1.3, 1.3, 0.05]}/>
                <Html center distanceFactor={-1.35} transform={true}>
                    <img src={album.image} alt={album.title}/>
                </Html>
            </mesh>
        </>
    );
}

export default Box;
