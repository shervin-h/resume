import React, {Component} from "react"
import {Element, Link} from "react-scroll";

import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import "./Navigation.css"

import logo from "../logo.svg"
import NavigateIcon from "./NavigateIcon";
import data from "../data.json";


class Navigation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            bgNavbar: (this.props.theme === 'dark-theme') ? 'nav-bg-transparent-dark' : 'nav-bg-transparent'
        }
    }
    render() {
        const children = this.props.children
        return(
            <div>
                <Element name="first" className="element"/>
                <div className="navbar-sticky">
                    <nav className={`navbar navbar-expand-lg ${(this.props.theme === 'dark-theme')? 'navbar-dark' : 'navbar-light'} nav-bg-transparent`}>
                    <div className="container-fluid">
                        <div className="justify-content-start">
                            <img className="App-logo" src={logo} alt="react-logo" style={{maxWidth:"56px" , maxHeight:"56px"}}/>
                            <a className="navbar-brand" href="#">React Resume</a>
                        </div>

                        {children}

                        <div className="justify-content-end navbar-nav">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                delay={200}>
                                <a className="nav-link " aria-current="page" href="#">About</a>
                            </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                delay={200}>
                                <a className="nav-link " href="#">Skills</a>
                            </Link>

                        </div>
                    </div>
                </nav>
                </div>
            </div>
        )
    }
}

export default Navigation