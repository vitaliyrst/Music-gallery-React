import React, {useEffect, useRef} from "react";
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls";
import {extend, useThree} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {getEnterState} from "../../../redux/selectors";
import {setEnter} from "../../../redux/actions";

extend({PointerLockControls});

const Controls = (props) => {
    const dispatch = useDispatch();
    const controls = useRef();

    const entered = useSelector(getEnterState);
    const {camera, gl} = useThree();

    useEffect(() => {
        if (entered) {
            controls.current.lock();
        }

        controls.current.addEventListener('unlock', () => {
            dispatch(setEnter(false));
            controls.current.unlock();
        });
    }, [dispatch, entered]);

    return (
        <pointerLockControls
            ref={controls}
            args={[camera, gl.domElement]}
            {...props}
        />
    );
}

export default Controls;
