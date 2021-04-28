import React, {useState} from 'react';
import style from './BurgerNavigation.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import s from "../skills/skill/Skill.module.scss";

export function BurgerNavigation() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.showNavItems}` : style.burgerNavItems}>
                <Link activeClass={style.active}
                      onClick={onButtonClick}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Main</Link>
                <Link activeClass={style.active}
                      onClick={onButtonClick}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className={style.link}
                >Skills</Link>
                <Link activeClass={style.active}
                      onClick={onButtonClick}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Projects</Link>
                <Link activeClass={style.active}
                      onClick={onButtonClick}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Contacts</Link>
            </div>
            <div className={style.button}
                 onClick={onButtonClick}>
                <FontAwesomeIcon className={s.icon}
                                 size={"1x"}
                                 icon={faBars}
                                 color={"#4e93e6"}/>
            </div>
        </div>
    );
}

