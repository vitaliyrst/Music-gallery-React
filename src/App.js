import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import * as FirebaseService from "./firebase/firebase";

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
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} exact={route.exact}>
                            <route.component/>
                        </Route>
                    ))}
                </main>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
