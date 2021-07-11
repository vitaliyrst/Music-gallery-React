import React, {Suspense} from "react";

import {Provider} from "react-redux";
import store from "../../../redux/store";

import {Canvas} from '@react-three/fiber'
import {Physics} from "@react-three/cannon";

import Player from "../Player/Player";
import Factory from "../Factory/Factory";
import TV from "../TV/TV";
import Loader from "./Loader/Loader";
import Env from "./Env/Env";
import Models from "../Models/Models";
import Images from "../Images/Images";

const Scene = () => {
    return (
        <Canvas mode='concurrent' gl={{alpha: true}}>
            <Provider store={store}>
                <ambientLight/>
                <Physics>
                    <Suspense fallback={<Loader/>}>
                        <Env/>
                        <Player/>
                        <Factory/>
                        <TV/>
                        <Models/>
                        <Images/>
                    </Suspense>
                </Physics>
            </Provider>
        </Canvas>
    );
}

export default Scene;
