import React from 'react';
import s from './Skill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';



type SkillPropsType = {
    description: string
    title: string
    icon: IconDefinition
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.iconBlock}>
                {/*<div className={s.icon}>*/}
                    <FontAwesomeIcon className={s.icon} icon={props.icon}/>
                {/*</div>*/}
            </div>
            <div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
}