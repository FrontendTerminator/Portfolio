import React, {useState} from 'react';
import style from './BurgerNavigation.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

export function BurgerNavigation() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onButtonClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.showNavItems}` : style.burgerNavItems}>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Main</Link>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className={style.link}
                >Skills</Link>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Projects</Link>
                <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >Contacts</Link>
            </div>
            <div className={style.button}
                 onClick={onButtonClick}>
            </div>
        </div>
    );
}

