import React, {useEffect} from "react";
import './Loader.css';
import {Html, useProgress} from "@react-three/drei";
import {useDispatch} from "react-redux";
import {setModelsLoading} from "../../../../redux/actions";

const Loader = () => {
    const dispatch = useDispatch();
    const {active, total} = useProgress();
    const totalObjects = 137;

    useEffect(() => {
        if (!active) {
            dispatch(setModelsLoading(true));
        }
    }, [active, dispatch]);

    const formula = (100 / totalObjects) * total;

    return (
        <Html center>
            <div className="loader3d_container">
                <div className='loader3d_header'>
                    Loading...
                </div>
                <div className="loader3d_progressbar_container">
                    <div className="loader3d_progressbar_complete" style={{width: `${formula}%`}}/>
                    <span className="loader3d_progressbar_progress">{formula.toFixed(0)}
                        %
                    </span>
                </div>
            </div>
        </Html>
    );
}

export default Loader;
