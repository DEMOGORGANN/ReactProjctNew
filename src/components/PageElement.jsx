//import React
import React from "react"
import { useParams } from "react-router"
import axios from "axios";
import { useState, useEffect } from "react";

//import css
import style from './../styles/PageElement.module.css'
export default function PageElement({ numberId }) {

    const params = useParams();
    const [post, setPost] = useState("")
    const [comments, setComments] = useState("")

    useEffect(() => {
        async function fetchGetPost() {
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts/" + params.id)
            setPost(responce.data);
        }

        async function fetchGetPostComments() {
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts/" + params.id + "/comments")
            setComments(responce.data);
        }

        fetchGetPost()
        fetchGetPostComments()
    }, [params])


    return (
        <div className={style.wrap}>
            <div className={style.post}>
                <h1 className={style.titles}>{numberId + 1}){post.title}</h1>
                <h3 className={style.body}>{post.body}</h3>
            </div>
            <div className={style.comments}>
                <h1>Комментарии:</h1>
                {comments.length === 0
                    ? <h1 style={{ textAlign: "center" }}>Комментарии не найдены</h1>
                    : comments.map((item, index) =>
                        <div key={index}  className={style.separateComponent}>
                            <h2>{index + 1}){item.name}</h2>
                            <h3>Email: {item.email}</h3>
                            <h4>Комментарий: {item.body}</h4>
                        </div>

                    )
                }
            </div>

        </div>
    )
}