import React, {useState} from "react";
import {useBox} from "@react-three/cannon";

const Cube = (props) => {
    const [hover, setHover] = useState(null);
    const [ref] = useBox(() => ({type: 'Static', ...props}));
    return (
        <mesh
            castShadow={true}
            ref={ref}
            onPointerMove={(eo) => {
                
            }}
        />
    )
}

export default Cube;