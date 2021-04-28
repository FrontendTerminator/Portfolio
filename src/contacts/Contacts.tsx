import React from 'react';
import style from './Contacts.module.scss';
import {Title} from "../common/components/title/Title";
import axios from 'axios';
import {useFormik} from "formik";
import ReactTypingEffect from "react-typing-effect";

const Fade = require('react-reveal/Fade')

export function Contacts() {

    const formik = useFormik({
        validate: (values) => {
            if (!values.name) {
                return {
                    name: 'Name is required'
                }
            }
            if (!values.contacts) {
                return {
                    contacts: 'Contacts is required'
                }
            }
            if (!values.message) {
                return {
                    message: 'Message is required'
                }
            }
        },
        initialValues: {
            name: '',
            contacts: '',
            message: ""
        },
        onSubmit: (values, actions) => {
            const {name, contacts, message} = values
            /* "http://localhost:3010/sendMessage" for local server*/
            axios.post("https://smtp-nodejs-gmail-server.herokuapp.com/sendMessage", {
                name: name,
                contacts: contacts,
                message: message
            }).then(() => {
                actions.resetForm({
                    values: {
                        name: "",
                        contacts: "",
                        message: ""
                    }
                })
                alert('your message has been sent')
            })
        }
    })

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Fade>
                    <Title text={'Contacts'}/>
                </Fade>
                <div className={style.formContainer}>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <Fade>
                            <input className={style.input}
                                   value={formik.values.name}
                                   type="text"
                                   name={"name"}
                                   placeholder={'Name'}
                                   onChange={formik.handleChange}
                            />
                            <input className={style.input}
                                   value={formik.values.contacts}
                                   type="text"
                                   name={"contacts"}
                                   placeholder={'Your contacts'}
                                   onChange={formik.handleChange}
                            />
                            <textarea className={style.textarea}
                                      value={formik.values.message}
                                      name={"message"}
                                      onChange={formik.handleChange}
                                      placeholder={'Your message'}>
                            </textarea>
                        </Fade>
                        <Fade>
                            <button type={"submit"}
                                    disabled={formik.isSubmitting}
                                    className={formik.isSubmitting
                                        ? style.disabledButton
                                        : style.button}>
                                {formik.isSubmitting
                                    ? <span>Sending<ReactTypingEffect speed={200}
                                                                      cursor={"."}
                                                                      eraseDelay={20}
                                                                      eraseSpeed={200}
                                                                      typingDelay={20}
                                                                      text={["..."]}/>
                                          </span>
                                    : 'Send message'}
                            </button>
                        </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
}

