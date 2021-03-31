import React from 'react';
import style from './Main.module.scss';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span className={style.firstString}>Hi There</span>
                    <h1 className={style.myName}>I am <span className={style.spanName}>Jacob Mikutishvili</span></h1>
                    <p className={style.secondString}>Fronted Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    );
}