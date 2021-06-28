import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import {CSSTransition} from "react-transition-group";
import {useDispatch} from "react-redux";
import {fetchGroup} from "./redux/actions/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGroup());
    }, [dispatch]);

    return (
        <Router>
            <NavBar/>

            <main className='app_main'>
                {/* {routes.map(({path, Component, exact}) => (
                    <Route key={path} path={path} exact={exact}>
                        {({match}) => (
                            <CSSTransition in={match != null} timeout={0} classNames='page' unmountOnExit>
                                {loading ?
                                    <Fallback className='loader' type='Puff' color='#c41818' width={150}
                                              height={150}/> :
                                    <Component/>
                                }
                            </CSSTransition>
                        )}
                    </Route>
                ))}*/}
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
