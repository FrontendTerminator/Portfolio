import style from "./WorkBlock.module.scss";
import React from "react";
import {Button} from "../../common/components/button/Button";
const Fade = require('react-reveal/Fade')

type WorkBlockPropsType = {
    title: string
    description: string
    style: React.CSSProperties
}

export function WorkBlock(props: WorkBlockPropsType) {
    return (
        <div className={style.workBlock}>
            <Fade>
                <div className={style.icon} style={props.style}>
                    <Button text={"view project"}/>
                </div>
                <div className={style.description}>
                    <h3 className={style.projectName}>{props.title}</h3>
                    <div className={style.shortDescription}>{props.description}</div>
                </div>
            </Fade>
        </div>
    );
}