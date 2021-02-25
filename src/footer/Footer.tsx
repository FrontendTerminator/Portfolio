import React from 'react';
import style from './Footer.module.css';
import {IconLink} from "./iconLink/IconLink";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Koba Mikutishvili</h2>
                <div className={style.iconsBlock}>
                    <IconLink/>
                    <IconLink/>
                    <IconLink/>
                    <IconLink/>
                </div>
                <span className={style.text}>© 2019 beingeorge, All Rights Reserved.</span>
            </div>
        </div>
    );
}

