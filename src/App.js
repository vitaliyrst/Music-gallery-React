import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className='app_container'>
                <NavBar/>

                <main className='app_main_container'>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} exact={route.exact}>
                            <route.component/>
                        </Route>
                    ))}
                </main>

                <footer className='app_footer_container'>
                    <Footer/>
                </footer>
            </div>
        </Router>
    );
}

export default App;
