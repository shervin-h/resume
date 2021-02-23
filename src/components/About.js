import React, {Component} from "react"
import {Element} from "react-scroll";
import Fullpage from "./Fullpage";

import data from "../data.json"

import "./About.css"
import "../App.css"

class About extends Component{
    render() {
        return(
            <Fullpage className={`about`}>
                <div className="container pull-to-top">
                    <h2 className="title">{data.sections[0].title}</h2>
                    <p className="text-body text">{data.sections[0].items[0].content}</p>
                </div>
            </Fullpage>
        )
    }
}

export default About