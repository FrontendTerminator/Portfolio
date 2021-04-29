import React from 'react';
import style from "./SecondarySkill.module.scss";
const Fade = require('react-reveal/Fade')

type SecondarySkillPropsType = {
    skillName: string
}

export function SecondarySkill(props: SecondarySkillPropsType) {
    return (
        <Fade>
            <div className={style.secondarySkill}><span className={style.hashtag}>#</span>{props.skillName}</div>
        </Fade>
    )
}