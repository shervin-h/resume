import React, {Component} from "react";
import Snowfall from "react-snowfall";

import "./Fullpage.css";
import "../App.css"

class Fullpage extends Component{
    render() {
        const children = this.props.children
        // console.log(this.props)
        return(
            <div className={`fullpage ${this.props.className || ''} ${this.props.theme || ''}`}>
                {children}
            </div>
        )
    }
}

export default Fullpage