import React from 'react';
import style from './Works.module.css';
import {WorkBlock} from "./work/WorkBlock";

export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <WorkBlock/>
                    <WorkBlock/>
                </div>
            </div>
        </div>
    );
}

