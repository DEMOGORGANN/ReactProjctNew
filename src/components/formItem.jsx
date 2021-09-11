//import React
import React, { useState } from "react";


//import components
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

//import css
import "./../styles/styleForm.css"

export default function FormItem({ addElemInDB }) {


    const [bord, setBord] = useState(true)
    const [post, setPost] = useState({ title: "", body: "", id: "" });


    const handleClick = (e) => {
        setBord(false);
        if (post.title && post.body) {
            setBord(true);
        }
        AddInputInState(e);
    }


    const AddInputInState = (e) => {
        e.preventDefault();
        if (post.title && post.body) {
            addElemInDB(post)
            setPost({ title: "", body: "" })
        }
    }

    return (
        <form className="formAddInput">
            <MyInput
                value={post.title}
                type="text"
                placeholder="Тема"
                className={post.title || bord ? 'nice' : 'borderRed'}
                onChange={(e) => setPost({ ...post, title: e.target.value, id: Date.now() })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Описание"
                className={post.body || bord ? 'nice' : 'borderRed'}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton
                onClick={handleClick}
            >Добавить</MyButton>
        </form>
    )
}