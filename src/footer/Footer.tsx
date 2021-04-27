import React from 'react';
import style from './Footer.module.scss';

const Fade = require('react-reveal/Fade')

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Fade>
                    <h2 className={style.title}>Jacob Mikutishvili</h2>
                </Fade>
                <Fade>
                    <div className={style.iconsBlock}>
                        <a className={style.link} href="https://www.linkedin.com/in/koba-mikutishvili-27a01120b/">Linkedin</a>
                        <a className={style.link} href="https://github.com/FrontendTerminator">GitHub</a>
                        <a className={style.link} href="https://www.instagram.com/koba_mikutishvili/">Instagram</a>
                        <a className={style.link} href="https://web.telegram.org/#/@Koba_Mikutishvili">Telegram</a>
                        <a className={style.link} href="https://vk.com/koba_jr">Vkontakte</a>
                        <a className={style.link} href="https://www.facebook.com/">Facebook</a>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

