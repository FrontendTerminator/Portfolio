import style from "./WorkBlock.module.css";
import React from "react";

export function WorkBlock() {
    return (
        <div className={style.workBlock}>
            <div className={style.icon}>
                <div className={style.button}>смотерть</div>
            </div>
            <div className={style.description}>
                <div className={style.projectName}>название проекта</div>
                <div className={style.shortDescription}>краткое описане</div>
            </div>
        </div>
    );
}