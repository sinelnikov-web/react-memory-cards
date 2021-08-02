import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {AppWrapper} from "./App.style";


function App() {
    return (
        <AppWrapper>
            <Main/>
        </AppWrapper>
    );
}

export default App;
