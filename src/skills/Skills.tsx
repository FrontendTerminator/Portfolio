import React from 'react';
import style from './Skills.module.css';
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}/>
                    <Skill title={"React"} description={"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"CSS"} description={"Labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    );
}