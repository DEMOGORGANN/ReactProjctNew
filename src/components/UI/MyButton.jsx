//import react
import React from "react";

//import css
import style from './../../styles/MyButton.module.css'


export default function MyButton(props) {
    return (
        <button {...props} className={style.buttonss}>{props.children}</button>
    )
}