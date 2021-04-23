import React from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";


export function Contacts() {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={'Contacts'}/>
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input
                            className={style.input}
                            type="text"
                            placeholder={'name'}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder={'E-mail'}
                        />
                        <textarea
                            className={style.textarea}
                            placeholder={'Your message'}
                        ></textarea>
                    </form>
                </div>
                <span className={style.button}>Send</span>
            </div>
        </div>
    );
}

