import React, {Component} from "react"

import Skill from "./Skill";
import Fullpage from "./Fullpage";

import data from "../data.json"

import "./Skills.css"
import 'bootstrap/dist/css/bootstrap.css';
import {Element, Link} from "react-scroll";
import NavigateIcon from "./NavigateIcon";

class Skills extends Component{
    render() {
        return(
            <div>
                <Fullpage className="skills">
                    <Element name="skills" className="element"/>
                    <div className="my-container">
                        <h2 className="text-body title">{data.sections[1].title}</h2>
                        <div className="row d-flex justify-content-center">
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[0].content.image}
                                   title={data.sections[1].items[0].content.title}
                                   description={data.sections[1].items[0].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[1].content.image}
                                   title={data.sections[1].items[1].content.title}
                                   description={data.sections[1].items[1].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[2].content.image}
                                   title={data.sections[1].items[2].content.title}
                                   description={data.sections[1].items[2].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[3].content.image}
                                   title={data.sections[1].items[3].content.title}
                                   description={data.sections[1].items[3].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[4].content.image}
                                   title={data.sections[1].items[4].content.title}
                                   description={data.sections[1].items[4].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[5].content.image}
                                   title={data.sections[1].items[5].content.title}
                                   description={data.sections[1].items[5].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[6].content.image}
                                   title={data.sections[1].items[6].content.title}
                                   description={data.sections[1].items[6].content.description}/>
                            <Skill col="col-lg-3 col-md-4 col-sm-5"
                                   src={data.sections[1].items[7].content.image}
                                   title={data.sections[1].items[7].content.title}
                                   description={data.sections[1].items[7].content.description}/>
                        </div>
                    </div>
                </Fullpage>
                <Link
                    activeClass="active"
                    to="first"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={400}>
                    <NavigateIcon className="b" icon={data.icons.up} />
                </Link>
            </div>

        )
    }
}

export default Skills