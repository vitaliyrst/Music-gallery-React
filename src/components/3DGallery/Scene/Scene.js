import React, {Suspense} from "react";

import {Canvas} from '@react-three/fiber'
import {Physics} from "@react-three/cannon";
import Ground from "../Ground/Ground";
import Player from "../Player/Player";
import Garage from "../Garage/Garage";
import {Provider} from "react-redux";
import store from "../../../redux/store";
import Garage2 from "../Garage2/Garage2";

const Scene = () => {

    return (
        <Canvas gl={{alpha: false}}>
            <Provider store={store}>
                <ambientLight />
                <Suspense fallback={null}>
                    <Physics>
                        <Ground/>
                        <Player/>
                    </Physics>
                    <Garage2/>
                </Suspense>

            </Provider>
        </Canvas>
    );
}

export default Scene;
