//import react
import React from "react";

//import components
import MyButton from "./UI/MyButton";
//import style
import "./../styles/stylePosts.css";

function ItemElement({ post, number, chechIdElements }) {

  function chechClickForDelete(e) {
    e.preventDefault();
    chechIdElements(post.id);
  }

  return (
    <div className="elem">
      <div>
        <strong>{number + 1}){post.title}</strong>
        <div>{post.body}</div>
      </div>
      <MyButton onClick={chechClickForDelete}>Удалить</MyButton>
    </div>
  );
}

export default ItemElement;
