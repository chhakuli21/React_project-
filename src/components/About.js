import React from 'react'

export default function About() {
    let myStyle = {
        color: 'red',
        backgroundClour: 'blue'

    }
    return ( <
        div className = 'container'
        style = { myStyle } >
        <
        h1 > About Us < /h1> <
        h2 > i am a leran about react < /h2> <
        button type = "button"
        class = "btn btn-primary" > Enable dark mode < /button> <
        /div>

    )
}