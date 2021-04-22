import React from 'react';
import style from './Main.module.scss';
import ava2 from './../assets/images/ava2.jpg';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const Fade = require('react-reveal/Fade')

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1200
            }
        }
    }
}

export function Main() {
    const photo = {
        backgroundImage: `url(${ava2})`
    }

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <Fade bottom>
                <div className={style.container}>
                    <div className={style.text}>
                        <span className={style.firstString}>Hi There</span>
                        <h1 className={style.myName}>I am <span className={style.spanName}>Jacob Mikutishvili</span>
                        </h1>
                        <ReactTypingEffect className={style.secondString}
                                           speed={100}
                                           eraseSpeed={70}
                                           typingDelay={2000}
                                           text={["Fronted Developer", "React-Redux Engineer"]}
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