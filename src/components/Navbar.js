import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return ( <
        nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        div className = "container-fluid" >
        <
        Link className = "navbar-brand"
        to = "#home" > { props.title } < /Link> <
        button className = "navbar-toggler"
        type = "button"
        data_bs_toggle = "collapse"
        data_bs_target = "#navbarNav"
        aria_controls = "navbarNav"
        aria_expanded = "false"
        aria_label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> <
        /button> <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link active"
        aria_current = "page"
        to = "/" > Home < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/about" > about < /Link> <
        /li> <
        /ul> <
        /div> <
        div className = "form-check form-switch" >
        <
        input className = "form-check-input"
        onClick = { props.toggleMode }
        type = "checkbox"
        id = "flexSwitchCheckDefault" /
        >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" > { props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode' } <
        /label> <
        /div> <
        /div> <
        /nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Enter title',
    aboutText: 'About'
};