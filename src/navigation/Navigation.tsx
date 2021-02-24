import React from 'react';
import style from './Navigation.module.css';

export function Navigation() {
    return (
        <div className={style.nav}>
            <a href={""}>Главаня</a>
            <a href={""}>Скилы</a>
            <a href={""}>Проекты</a>
            <a href={""}>Контакты</a>
        </div>
    );
}

