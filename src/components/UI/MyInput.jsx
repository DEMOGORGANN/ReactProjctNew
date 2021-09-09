//import react
import React from "react";

//import css
import './../../styles/MyInput.css'


export default function MyInput(props) {
    return (
        <div>
            <input {...props} />
        </div>
    )
}