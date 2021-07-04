import {useEffect, useState} from "react";

const usePlayerControls = () => {
    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
    });

    const moveByKeyPress = (key) => {
        const keys = {
            KeyW: 'moveForward',
            KeyS: 'moveBackward',
            KeyA: 'moveLeft',
            KeyD: 'moveRight'
        }

        return keys[key];
    }

    useEffect(() => {
        const handleKeyDown = (eo) => setMovement(state => ({...state, [moveByKeyPress(eo.code)]: true}));
        const handleKeyUp = (eo) => setMovement(state => ({...state, [moveByKeyPress(eo.code)]: false}));

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    return movement;
}

export default usePlayerControls;