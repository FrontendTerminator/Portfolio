import React from 'react';
import style from './App.module.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Projects} from "./projects/Projects";
import {BurgerNavigation} from "./burgerNavigation/BurgerNavigation";

function App() {
    return (
        <div className={style.app}>
            {/*<Header/>*/}
            <BurgerNavigation/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
