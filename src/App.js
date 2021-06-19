import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import * as FirebaseService from "./firebase/firebase";
import {CSSTransition} from "react-transition-group";

function App() {

    useEffect(() => {
        const data = FirebaseService.getGroupsList()
        console.log(data)
    })

    return (
        <Router>
            <div className='app_container'>
                <NavBar/>

                <main className='app_main'>
                    {routes.map(({path, Component, exact}) => (
                        <Route key={path} path={path} exact={exact}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={1000}
                                    classNames='page'
                                    unmountOnExit
                                >
                                    <Component/>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </main>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
