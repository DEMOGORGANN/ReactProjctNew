//import react
import React from "react";

//import style
import "./../styles/styleElement.css";

function ItemElement({post}) {
  return (
    <div className="elem">
      <div className="description">
        <strong>{post.id}){post.title}</strong>
        <div>{post.body}</div>
      </div>
      <button>Удалить</button>
    </div>
  );
}

export default ItemElement;
