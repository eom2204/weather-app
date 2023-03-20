import React, {useState} from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
