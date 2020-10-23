import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import './css/common.css';

import Menu from './Menu'
import Contents from './Contents'


const App = () => {
    return (
        <Router>
            <div className="wrap">
                <nav>
                    <Menu />
                </nav>
                <section>
                    <Contents />
                </section>
            </div>
        </Router>
    );
}

export default App;