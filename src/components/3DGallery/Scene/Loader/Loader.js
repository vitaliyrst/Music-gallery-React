import React, {useEffect} from "react";
import './Loader.css';
import {Html, useProgress} from "@react-three/drei";
import {useDispatch} from "react-redux";
import {setModelsLoading} from "../../../../redux/actions";

const Loader = () => {
    const dispatch = useDispatch();
    const {total} = useProgress();
    const totalObjects = 66;

    useEffect(() => {
        if (total === totalObjects) {
            setTimeout(() => {
                dispatch(setModelsLoading(true));
            }, 3000);
        }
    }, [dispatch, total]);

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
