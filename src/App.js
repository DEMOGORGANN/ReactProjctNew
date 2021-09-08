//import react
import React, { useState } from "react";

//import components
import ItemElement from "./components/itemElement";
import "./styles/app.css"

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript1", body: "Description1" },
    { id: 3, title: "JavaScript2", body: "Description2" },
  ])

  return (
    <div className="App">
      <h2>Элементы Java-Script</h2>
      {posts.map((post) =>
        <ItemElement post={post} key={post.id} />
      )}
    </div>
  );
}

export default App;
