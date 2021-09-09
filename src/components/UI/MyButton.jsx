//import react
import React from "react";

//import css
import './../../styles/MyButton.css'


export default function MyButton(props) {
    return (
        <button {...props}>{props.children}</button>
    )
}