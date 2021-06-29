import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import {fetchGroup} from "./redux/actions/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.backgroundImage = 'url("/assets/images/background/background2.jpg")';
        dispatch(fetchGroup());
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