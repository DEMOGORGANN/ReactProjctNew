//import react
import React, { useState, useEffect } from "react";
import axios from 'axios';

//import components
import PostsItem from "./components/PostsItem";
import FormItem from "./components/formItem";
import MyModal from "./components/UI/MyModal";

//import css
import "./styles/app.css"



function App() {
  const [posts, setPosts] = useState("")
  const [modal, setModal] = useState(false);

  const addElemInDB = (post) => {
    setPosts([...posts, { ...post }])
  }

  const deleteElemInDB = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const fetchGetPost = async () => {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(responce.data)
  }

  useEffect(() => {
    fetchGetPost()
  }, [])

  return (
    <div className="App">
      <button onClick={() => setModal(true)}>Добавить пост</button>

      <MyModal
        setVisible={setModal}
        visible={modal}>
        <FormItem addElemInDB={addElemInDB} setModal={setModal} />
      </MyModal>

      <PostsItem titles="Компоненты JAVA-SCRIPT" dataBase={posts} deleteElemInDB={deleteElemInDB} setPosts={setPosts} />
    </div>
  );
}

export default App;
