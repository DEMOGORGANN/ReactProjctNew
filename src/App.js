//import react
import React, { useState } from "react";

//import components
import PostsItem from "./components/PostsItem";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";

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



  const AddInputInState = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: "", body: "" })
  }

  return (
    <div className="App">
      <form className="formAddInput">
        <MyInput
          type="text"
          placeholder="Тема"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Описание"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton
          onClick={AddInputInState}
        >Добавить</MyButton>
      </form>
      <div>
        <PostsItem post={posts} titles="Компоненты JAVA-SCRIPT" dataBase={posts}/>
      </div>
    </div>
  );
}

export default App;
