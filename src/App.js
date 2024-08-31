import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });

        setTimeout(() => {
            setAlert(null);
        }, 3000); // Hide alert after 3 seconds
    };

    const toggleMode = () => {
        setMode(prevMode => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            showAlert(`Switched to ${newMode} mode`, 'success');
            return newMode;
        });
    };

    const handleTextTransformation = (text, transformationType) => {
        let newText;
        if (transformationType === 'uppercase') {
            newText = text.toUpperCase();
            showAlert('Text converted to uppercase!', 'success');
            document.title = 'TextUtils - Dark Mode';
        } else if (transformationType === 'lowercase') {
            newText = text.toLowerCase();
            showAlert('Text converted to lowercase!', 'success');
            document.title = 'TextUtils - Light Mode';
        }
        return newText;
    };

    return ( <
        Router >
        <
        div className = { `App ${mode}` } >
        <
        Navbar title = "TextUtils"
        mode = { mode }
        toggleMode = { toggleMode }
        /> <
        Alert alert = { alert }
        /> <
        div className = "container my-3" >
        <
        Routes >
        <
        Route exact path = "/about"
        element = { < About / > }
        /> <
        Route exact path = "/"
        element = { < TextForm heading = "Enter the text to analyze"
            mode = { mode }
            handleTextTransformation = { handleTextTransformation }
            />} / >
            <
            /Routes> <
            /div> <
            /div> <
            /Router>
        );
    }

    export default App;