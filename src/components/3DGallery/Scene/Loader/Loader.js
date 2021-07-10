import React, {useEffect} from "react";
import './Loader.css';
import {Html, useProgress} from "@react-three/drei";
import {useDispatch} from "react-redux";
import {setModelsLoading} from "../../../../redux/actions";

const Loader = () => {
    const dispatch = useDispatch();
    const {total} = useProgress();
    console.log(total)
    useEffect(() => {
        if (total === 62) {
            setTimeout(() => {
                dispatch(setModelsLoading(true));
            }, 1000);
        }
    }, [dispatch, total]);

    return (
        <Html center>
            <div className="loader3d_container">
                <div className='loader3d_header'>
                    Loading...
                </div>
                <div className="loader3d_progressbar_container">
                    <div className="loader3d_progressbar_complete" style={{width: `${(100 / 62) * total}%`}}/>
                    <span className="loader3d_progressbar_progress">{((100 / 62) * total).toFixed(0)}
                        %
                    </span>
                </div>
            </div>
        </Html>
    );
}

export default Loader;
