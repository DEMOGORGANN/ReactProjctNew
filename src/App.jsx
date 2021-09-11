//import react
import React, { useState } from "react";

//import components
import PostsItem from "./components/PostsItem";
import FormItem from "./components/formItem";

//import css
import "./styles/app.css"
// import './../../styles/MyInput.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 163120654353023476, title: "JavaScript", body: "Description" },
    { id: 1234323123453456690576, title: "JavaScript1", body: "Description1" },
    { id: 1631254690236, title: "JavaScript2", body: "Description2" },
    { id: 1631203453455765, title: "JavaScript3", body: "Description3" },
  ])


  const [post, setPost] = useState({ title: "", body: "" });

  const checkIdInState = (idElement) => {
    posts.forEach((item, i) => {
      if (item.id === idElement) {
        setPosts(posts.slice(0, i).concat(posts.slice(i + 1)))
      }
    })
  }



  const AddInputInState = (e) => {
    e.preventDefault();
    if (post.title && post.body) {
      setPosts([...posts, { ...post, id: Date.now() }])
      setPost({ title: "", body: "" })
    }
  }


  return (
    <div className="App">
      <FormItem AddInputInState={AddInputInState} setPost={setPost} post={post} />
      <PostsItem post={posts} titles="Компоненты JAVA-SCRIPT" dataBase={posts} checkIdInState={checkIdInState} />
    </div>
  );
}

export default App;
