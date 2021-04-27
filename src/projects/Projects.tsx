import React from 'react';
import style from './Projects.module.scss';
import {WorkBlock} from "./work/WorkBlock";
import {Title} from "../common/components/title/Title";
import socialNetwork from "./../assets/images/socialNetwork.jpg"
import todoImage from "./../assets/images/Dr40j7zW4AEZdop.jpg"

const Fade = require('react-reveal/Fade')

export function Projects() {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }

    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div id={"projects"} className={style.worksBlock}>
            <Fade>
                <Title text={'Projects'}/>
            </Fade>
            <div className={style.worksContainer}>

                <div className={style.works}>
                    <WorkBlock
                        style={social}
                        title={'Social network'}
                        description={'social network - training application'}/>
                    <WorkBlock
                        style={todolist}
                        title={'Todolist'}
                        description={'Todolist - training application'}/>
                </div>
            </div>
        </div>
    );
}

