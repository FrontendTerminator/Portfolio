import React from 'react';
import s from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-brands-svg-icons';

const Fade = require('react-reveal/Fade')

type SkillPropsType = {
    description: string
    title: string
    icon: IconDefinition
}

export function Skill(props: SkillPropsType) {
    return (
        <Fade>
            <div className={s.skill}>
                <div className={s.iconBlock}>
                    <FontAwesomeIcon className={s.icon} icon={props.icon}/>
                </div>
                <div className={s.descriptionBlock}>
                    <h3 className={s.title}>{props.title}</h3>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
        </Fade>
    );
}