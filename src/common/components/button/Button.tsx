import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
    text: string
    link: string
}

export function Button(props: ButtonPropsType) {
    return (
        <a href={props.link} className={style.btn}>{props.text}</a>
    )
}