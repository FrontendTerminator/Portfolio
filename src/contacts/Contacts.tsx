import React from 'react';
import style from './Contacts.module.css';


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <textarea className={style.textarea}></textarea>
                    </form>
                </div>
                <span className={style.button}>Send</span>
            </div>
        </div>
    );
}

