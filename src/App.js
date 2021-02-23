import React, {Component} from "react";
import Snowfall from "react-snowfall";

import Navigation from "./components/Navigation";
import About from "./components/About";
import First from "./components/First";
import Skills from "./components/Skills";
import Father from "./components/Father";

import './App.css';
import logo from './logo.svg';
import data from "./data.json";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: "light-theme",
            color: "white"
        }
    }

    changeColor = () => {
        this.setState({
            theme: (this.state.theme === "light-theme") ? "dark-theme" : "light-theme",
            color: (this.state.color === "white") ? "dark" : "white"
        })
    }

    render() {
        return (
            <div className="App">
                <Snowfall color={(this.state.theme === 'light-theme')? "pink" : "white"} snowflakeCount={400} />
                <Navigation theme={this.state.theme}>
                    <img
                        onClick={  () => {this.changeColor()}  }
                        src={data.icons.theme} width={40} height={40} alt="theme-color-icon"/>
                </Navigation>
                <First theme={this.state.theme} color={this.state.color}/>
                <About theme={this.state.theme} color={this.state.color}/>
                <Skills theme={this.state.theme} color={this.state.color}/>
                <Father/>
            </div>
        )
    }
}

export default App;
