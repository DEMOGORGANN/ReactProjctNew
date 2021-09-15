//import react
import React from "react";
import { useHistory } from "react-router";

//import components
import MyButton from "./UI/MyButton";
//import style
import "./../styles/stylePosts.css";

function ItemElement({ post, number, chechIdElements, transferNumber }) {

  const router = useHistory()

  function chechClickForDelete(e) {
    e.preventDefault();
    chechIdElements(post.id);
  }

  function clickForOpenElem() {
    router.push(`/post/${post.id}`);
    transferNumber(number);
  }

  return (
    <div className="elem">
      <div>
        <strong>{number + 1}){post.title}</strong>
        <div>{post.body}</div>
      </div>
      <MyButton onClick={() => clickForOpenElem()}>Открыть</MyButton>
      <MyButton onClick={chechClickForDelete}>Удалить</MyButton>
    </div>
  );
}

export default ItemElement;
