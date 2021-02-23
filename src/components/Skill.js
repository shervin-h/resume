import React, {Component} from "react"
import "./Skill.css"
import 'bootstrap/dist/css/bootstrap.css';

class Skill extends Component{
    state = {
        bgc: "white",
        color: "#222222"
    }
    changeBgColor = () => {
        this.setState({
            bgc: (this.state.bgc === "white")? "#189cd0" : "white",
            color: ( this.state.color === "#222222")? "white" : "#222222"
        })
    }

    render() {
        return(
            <div className={`card shadow m-4 p-0 ${this.props.col || ''}`}
                style={{
                    backgroundColor: this.state.bgc
                }}
                onMouseOver={() => {
                    this.changeBgColor()
                }}
                onMouseLeave={() => {
                    this.changeBgColor()
                }}>

                <div className="overflow-hidden">
                    <img className="card-img-top img overflow-img" src={this.props.src} alt="certificate"/>
                </div>
                <div className="card-body p-2">

                    <h3 className="card-title"
                        style={{
                            color: this.state.color
                        }}
                    >
                        {this.props.title}
                    </h3>

                    <p className="card-text"
                       style={{
                           color: this.state.color
                       }}
                    >
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default Skill