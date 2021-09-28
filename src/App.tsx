import React, {Suspense} from 'react';
import {Route} from "react-router-dom";
import 'materialize-css'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./common/Preloader/Preloader";


//For Lazy loading components
const Horizontal = React.lazy(() => import("./pages/Horizontal/Horizontal"))
const Column = React.lazy(() => import("./pages/Column/Column"))



function App() {
    return (
        <div className="App">
            <Navbar/>
            <Suspense fallback={<Preloader />}>
                <div className={"content"}>
                    <Route exact path='/horizontal' render={() => <Horizontal/>}/>
                    <Route exact path='/column' render={() => <Column/>}/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
