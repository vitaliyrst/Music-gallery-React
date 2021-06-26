import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";
import {useFirestoreConnect} from "react-redux-firebase";

const App = () => {
    useFirestoreConnect([{collection: 'posts', orderBy: ['id'], storeAs: 'posts'}]);
    useFirestoreConnect([{collection: 'groups', storeAs: 'groups'}]);

    return (
        <Router>
            <NavBar/>

            <main className='app_main'>
                {routes.map(({path, Component, exact}) => (
                    <Route key={path} path={path} exact={exact}>
                        {({match}) => (
                            <CSSTransition in={match != null} timeout={900} classNames='page' unmountOnExit>
                                <Component/>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </main>

            <Footer/>
        </Router>
    );
}

export default App;
