import React, {useEffect} from "react";
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";

import {useDispatch} from "react-redux";
import {fetchGroup, setOS} from "./redux/actions";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.backgroundImage = 'url("/assets/images/background/background2.jpg")';
        dispatch(fetchGroup());
        dispatch(setOS((/Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent))));
    }, [dispatch]);

    return (
        <Router>
            <NavBar/>

            <main className='app_main'>
                {routes.map(({path, Component, exact}) => (
                    <Route key={path} path={path} exact={exact}>
                        <Component/>
                    </Route>
                ))}
            </main>

            <Footer/>
        </Router>
    );
}

export default App;