//import react
import React from "react";

//import style
import "./../styles/styleElement.css";

//import components
import ItemElement from "./../components/itemElement";

function PostsItem({ post , titles}) {
    return (
        <div>
            <h2>{titles}</h2>
            {post.map((post, index) =>
                <ItemElement post={post} key={post.id} number={index}/>
            )}
        </div>
    );
}

export default PostsItem;
