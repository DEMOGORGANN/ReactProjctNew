//import react
import React from "react";

//import components
import ItemElement from "./../components/itemElement";

function PostsItem({ post, titles, checkIdInState}) {


    function chechIdElements(idElement) {
        checkIdInState(idElement)
    }


    return (
        <div>
            <h2>{titles}</h2>
            {post.map((post, index) =>
                <ItemElement post={post} key={post.id} number={index} chechIdElements={chechIdElements}/>
            ).reverse()}
        </div>
    );
}

export default PostsItem;
