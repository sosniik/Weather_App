import React from 'react';
import {Routes, Route} from "react-router-dom";
import '../styles/App.css';
import TopNav from './TopNav.jsx'
import Favorite from "./favorite";
import CallApi from "./callApi";

function App() {
    return (
        <div>
            <header className="App-header">
                <TopNav/>
                <p className="text">Developed by Léo from 💙 </p>
            </header>
            <Routes>
                <Route path="/" element={<CallApi/>}/>
                <Route path="/Favorite" element={<Favorite/>}/>
            </Routes>
        </div>
    )
}

export default App;


