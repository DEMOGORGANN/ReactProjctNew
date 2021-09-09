//import react
import React from "react";

//import style
import "./../styles/styleElement.css";

function ItemElement({ post, number }) {
  return (
    <div className="elem">
      <div className="description">
        <strong>{number + 1}){post.title}</strong>
        <div>{post.body}</div>
      </div>
      <button>Удалить</button>
    </div>
  );
}

export default ItemElement;
