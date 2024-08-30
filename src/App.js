// import About from './components/About';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
            document.title = 'TextUtils-Dark Mode';
        } else if (transformationType === 'lowercase') {
            newText = text.toLowerCase();
            showAlert('Text converted to lowercase!', 'success');
            document.title = 'TextUtils-light Mode';
        }
        return newText;
    };

    return ( <
        div className = { `App ${mode}` } >
        <
        Navbar title = "TextUtils"
        aboutText = "About TextUtils"
        mode = { mode }
        toggleMode = { toggleMode }
        /> <
        Alert Alert = { alert }
        /> <
        div className = "container my-3" >
        <
        TextForm heading = "Enter the text to analyze"
        mode = { mode }
        handleTextTransformation = { handleTextTransformation }
        /> <
        /div> <
        /div>
    );
}

export default App;