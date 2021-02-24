import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Fronted Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    );
}