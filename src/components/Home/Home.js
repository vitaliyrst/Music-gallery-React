import React from "react";
import './Home.css';
import {shallowEqual, useSelector} from "react-redux";

const Home = () => {

    const groups = useSelector(({firestore: {ordered}}) => ordered.groups, shallowEqual);
    console.log(groups)


    return (
        <div className='home_container page'>
            Main
        </div>
    );
}

export default Home;