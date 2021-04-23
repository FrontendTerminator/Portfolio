import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
const Fade = require('react-reveal/Fade')

export function Skills() {

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'My skills'}/>
                <Fade bottom>
                    <div className={style.skills}>
                        <Skill title={"JS"}
                               icon={faJs}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                        <Skill title={"React"}
                               icon={faReact}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                        <Skill title={"HTML"}
                               icon={faHtml5}
                               description={"Labore et dolore magna aliqua Ut enim..."}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}