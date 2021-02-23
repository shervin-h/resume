import React, {Component} from "react"
import "./NavigateIcon.css"

class NavigateIcon extends Component{

    render() {
        return(
            <div className={this.props.className}>
                <div>
                    <img className="icon" src={this.props.icon} alt="navigate-icon"/>
                </div>
            </div>
        )
    }
}

export default NavigateIcon