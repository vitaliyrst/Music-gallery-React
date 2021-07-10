import React, {Suspense} from "react";

import {Canvas} from '@react-three/fiber'
import {Physics} from "@react-three/cannon";
import Player from "../Player/Player";
import {Provider} from "react-redux";
import store from "../../../redux/store";
import Factory from "../Factory/Factory";
import TV from "../TV/TV";
import Loader from "./Loader/Loader";

const Scene = () => {
    return (
        <Canvas mode='concurrent' gl={{alpha: true}}>
            <Provider store={store}>
                <ambientLight/>
                <Physics>
                    <Suspense fallback={<Loader/>}>
                        <Player/>
                        <Factory/>
                        <TV/>
                    </Suspense>
                </Physics>
            </Provider>
        </Canvas>
    );
}

export default Scene;
