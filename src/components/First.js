import React, {Component} from "react"
import {SocialIcon} from "react-social-icons";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Fullpage from "./Fullpage";
import NavigateIcon from "./NavigateIcon";

import data from "../data.json"

import "./First.css"
import "../App.css"

class First extends Component{
    state = {
        color: "#157df8",
        theme: this.props.theme
    }
    changeColor = ()=>{
        this.setState({
            color: (this.state.color === "#157df8")? "#cd2a83" :"#157df8",
            theme: this.props.theme
        })
    }

    render() {
        return(
            <div>
                <Fullpage className={`first ${this.props.theme}`}>
                    <div>
                        <h1 className="shimmer"><b>{data.name}</b></h1><br/><br/>
                        <h2 className={(this.props.theme === 'dark-theme')? 'text-light-shadow' : 'text-dark-shadow'} style={{
                            color: this.state.color
                        }}
                            onMouseOver={() => {
                                this.changeColor()
                            }}
                            onMouseLeave={() => {
                                this.changeColor()
                            }}
                        >
                            {data.subtitle}
                        </h2><br/>
                        <div className="icon-wrapper">
                            {
                                Object.keys(data.links).map((key) => {
                                    return (
                                        <div className="icon">
                                            <SocialIcon url={data.links[key]} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Fullpage>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={400}>
                    <NavigateIcon className="f" icon={data.icons.down} />
                </Link>
                <Element name="about" className="element"/>
            </div>
        )
    }
}

export default First