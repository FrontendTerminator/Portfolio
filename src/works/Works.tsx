import React from 'react';
import style from './Works.module.css';
import {Work} from "./work/Work";

export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>Мои Работы</h2>
                <div className={style.works}>
                    <Work/>
                </div>
            </div>
        </div>
    );
}

