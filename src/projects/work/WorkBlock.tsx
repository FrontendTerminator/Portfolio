import style from "./WorkBlock.module.css";
import React from "react";

type WorkBlockPropsType = {
    title: string
    description: string
    style: React.CSSProperties
}

export function WorkBlock(props: WorkBlockPropsType) {
    return (
        <div className={style.workBlock}>
            <div className={style.icon} style={props.style}>
                <div className={style.button}>смотерть</div>
            </div>
            <div className={style.description}>
                <h3 className={style.projectName}>{props.title}</h3>
                <div className={style.shortDescription}>{props.description}</div>

                {/*<div className={style.projectName}>название проекта</div>
                <div className={style.shortDescription}>краткое описане</div>*/}
            </div>
        </div>
    );
}