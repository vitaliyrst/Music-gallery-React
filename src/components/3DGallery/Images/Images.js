import React from "react";
import './Images.css'
import Box from "./Box/Box";
import {useSelector} from "react-redux";
import {getGroupAlbums} from "../../../redux/selectors";

const Images = () => {
    const albums = useSelector(getGroupAlbums);

    return (
        <>
            {albums &&
            <group>
                <Box position={[8, 2, -3.3]} rotation={[0, 0, 0]} album={albums[0]}/>
                <Box position={[10.4, 2, -3.3]} rotation={[0, 0, 0]} album={albums[1]}/>
                <Box position={[5.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[2]}/>
                <Box position={[3.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[3]}/>
                <Box position={[1.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[4]}/>
                <Box position={[-0.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[5]}/>
                <Box position={[-2.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[6]}/>
                <Box position={[-4.6, 2, -4.81]} rotation={[0, 0, 0]} album={albums[7]}/>
            </group>}
        </>
    )
}

export default Images;
