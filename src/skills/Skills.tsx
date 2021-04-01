import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"CSS"} description={"Labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    );
}