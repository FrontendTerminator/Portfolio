import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faCss3Alt, faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {SecondarySkill} from './secondarySkill/SecondarySkill';
import {faFileArchive, faFileCode} from "@fortawesome/free-solid-svg-icons";

const Fade = require('react-reveal/Fade')

export function Skills() {

    const secondarySkills = [
        'Rest API', 'Axios', 'Websockets', 'Redux toolkit', 'React-Redux', 'Redux-Thunk',
        'react router dom', 'Jest test', 'Material UI', 'Storybook', 'Formik', 'Sass', 'module css',
        'Redux form', 'WebStorm', 'npm', 'yarn', 'Visual Studio Code',
        'Flexbox', 'Flux architecture', 'CRM systems', 'Amo crm', 'Bitrix', 'Hooks',
        'Hocs', 'SCSS', 'Git', 'GitHub', 'Heroku', 'nodejs', 'Managment', 'Teamwork'
    ]

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <div className={style.skillsSecondBlock}>

                    <div className={style.title}>
                        <Fade>
                            <Title text={'My skills'}/>
                        </Fade>
                    </div>
                    <div className={style.skills}>
                        <Skill title={"React"}
                               icon={faReact}
                               description={"React is front end, JavaScript library for building user interfaces or UI components"}/>
                        <Skill title={"Redux"}
                               icon={faFileArchive}
                               description={"Redux is JavaScript library for managing application state"}/>
                        <Skill title={"TypeScript"}
                               icon={faFileCode}
                               description={"TypeScript is a superset of JavaScript which provides optional static typing"}/>
                        <Skill title={"JavaScript"}
                               icon={faJs}
                               description={"JavaScript is a programming language"}/>
                        <Skill title={"HTML"}
                               icon={faHtml5}
                               description={"HTML is the standard markup language for creating Web pages"}/>
                        <Skill title={"CSS"}
                               icon={faCss3Alt}
                               description={"CSS is the coding language that gives a website its look and layout"}/>
                    </div>
                    <div className={style.secondarySkills}>
                        {secondarySkills.map(skill => <SecondarySkill key={skill} skillName={skill}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}