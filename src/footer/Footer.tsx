import React from 'react';
import style from './Footer.module.scss';
import {IconLink} from "./iconLink/IconLink";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Jacob Mikutishvili</h2>
                <div className={style.iconsBlock}>
                    <a className={style.link} href="">Linkedin</a>
                    <a className={style.link} href="">Instagram</a>
                    <a className={style.link} href="">GitHub</a>
                    <a className={style.link} href="">Vkontakte</a>
                    <a className={style.link} href="">Facebook</a>

                    {/*<IconLink/>
                    <IconLink/>
                    <IconLink/>
                    <IconLink/>*/}
                </div>
                {/*<span className={style.text}>© 2019 beingeorge, All Rights Reserved.</span>*/}
            </div>
        </div>
    );
}

