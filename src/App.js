import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";

const App = () => {

    return (
        <Router>
            <NavBar/>

            <main className='app_main'>
                <Switch>
                    {routes.map(({path, Component, exact}) => (
                        <Route key={path} path={path} exact={exact}>
                            {({match}) => (
                                <CSSTransition in={match != null} timeout={900} classNames='page' unmountOnExit>
                                    <Component/>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                    <Redirect from={'/'} to={'/news'}/>
                </Switch>
            </main>

            <Footer/>
        </Router>
    );
}

export default App;
