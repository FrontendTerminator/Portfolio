import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType = {
    description: string
    title: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.iconBlock}>
                <div className={s.icon}></div>
            </div>
            <div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
}