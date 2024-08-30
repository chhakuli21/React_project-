import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('enter text here');

    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        const newText = props.handleTextTransformation(text, 'uppercase');
        setText(newText);
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked: " + text);
        const newText = props.handleTextTransformation(text, 'lowercase');
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("On change ");
        setText(event.target.value);
    };

    return ( <
        >
        <
        div className = 'container' >
        <
        h1 > { props.heading } < /h1> <
        div className = "mb-3" >
        <
        textarea className = "form-control"
        value = { text }
        onChange = { handleOnChange }
        id = "mybox"
        rows = "6" > < /textarea> <
        /div> <
        button className = "btn btn-primary"
        onClick = { handleUpClick } > Convert to Uppercase < /button> <
        button className = "btn btn-primary"
        onClick = { handleLoClick } > Convert to Lowercase < /button> <
        /div> <
        div className = "container mb-3" >
        <
        h1 > Your Text Summary < /h1> <
        p > { text.split(" ").filter(word => word.length > 0).length }
        words and { text.length }
        characters < /p> <
        p > { 0.008 * text.split(" ").filter(word => word.length > 0).length }
        minutes read < /p> <
        /div> <
        h2 > Preview < /h2> <
        p > { text } < /p> <
        />
    );
}