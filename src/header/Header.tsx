import React from 'react';
import style from './Header.module.scss';
import {Navigation} from "../navigation/Navigation";
import {BurgerNavigation} from "../burgerNavigation/BurgerNavigation";

export function Header() {
    return (
        <div className={style.header}>
            <Navigation/>
            <BurgerNavigation/>
        </div>
    );
}

