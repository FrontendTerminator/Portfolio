import React from 'react';
import style from './Main.module.scss';
import ava from './../assets/images/1ava.jpg';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import {BurgerNavigation} from "../burgerNavigation/BurgerNavigation";

const Fade = require('react-reveal/Fade')

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1200,
            }
        },
        "color": {
            "value": "#4E93E6"
        },
        "line_linked": {
            "enable": true,
            "color": "#4E93E6",
            "opacity": 0.5
        },
        "move": {
            "speed": 0.8
        }
    }
}

export function Main() {
    const photo = {
        backgroundImage: `url(${ava})`
    }

    return (
        <div id={"main"} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <Fade>
                <div className={style.container}>
                    <div className={style.text}>
                        <span className={style.firstString}>Hi There</span>
                        <h1 className={style.myName}>I am
                            <span className={style.spanName}>Jacob <span>Mikutishvili</span></span>
                        </h1>
                        <ReactTypingEffect className={style.secondString}
                                           speed={100}
                                           eraseSpeed={70}
                                           typingDelay={2000}
                                           text={["Front-end Developer", "Welcome to my page"]}
                        />
                    </div>
                    <div className={style.photoBlock}>
                        <div className={style.photo} style={photo}></div>
                        <span className={style.frame}></span>
                    </div>
                </div>
            </Fade>
        </div>
    );
}