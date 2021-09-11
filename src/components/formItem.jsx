//import React
import React, { useState } from "react";


//import components
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

//import css
import "./../styles/styleForm.css"

export default function FormItem({ AddInputInState, setPost, post }) {


    const [born, setBord] = useState(true)


    const handleClick = (e) => {
        setBord(false);
        if (post.title && post.body) {
            setBord(true);
        }

        AddInputInState(e);
    }

    return (
        <form className="formAddInput">
            <MyInput
                value={post.title}
                type="text"
                placeholder="Тема"
                className={post.title || born ? 'nice' : 'borderRed'}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Описание"
                className={post.body || born ? 'nice' : 'borderRed'}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton
                onClick={handleClick}
            >Добавить</MyButton>
        </form>
    )
}