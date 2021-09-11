//import react
import React, { useState } from "react";

//import components
import PostsItem from "./components/PostsItem";
import FormItem from "./components/formItem";

//import css
import "./styles/app.css"


function App() {
  const [posts, setPosts] = useState([
    { id: 163120654353023476, title: "JavaScript", body: "Description" },
    { id: 1234323123453456690576, title: "JavaScript1", body: "Description1" },
    { id: 1631254690236, title: "JavaScript2", body: "Description2" },
    { id: 1631203453455765, title: "JavaScript3", body: "Description3" },
  ])

  const addElemInDB = (post) => {
    setPosts([...posts, { ...post }])
  }

  const deleteElemInDB = (incriment) => {
    setPosts(posts.slice(0, incriment).concat(posts.slice(incriment + 1)))
  }


  return (
    <div className="App">
      <FormItem addElemInDB={addElemInDB} />
      <PostsItem titles="Компоненты JAVA-SCRIPT" dataBase={posts} deleteElemInDB={deleteElemInDB} setPosts={setPosts} />
    </div>
  );
}

export default App;
