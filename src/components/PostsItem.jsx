//import react
import React, { useState, useEffect } from "react";

//import components
import ItemElement from "./../components/itemElement";
import MySeach from "./UI/MySeach";

export default function PostsItem({ dataBase, titles, deleteElemInDB }) {


    //костыль ввиде флага для поиска в списке
    const [flag, setFlag] = useState(true);
    const [newDB, setDB] = useState(dataBase)


    useEffect(() => {
        if (flag) {
            setDB(dataBase)
        }
    }, [dataBase, flag])

    function chechIdElements(idElement) {
        newDB.forEach((item, i) => {
            if (item.id === idElement) {
                deleteElemInDB(i)
            }
        })
    }


    const searhElem = (e) => {
        const value = e.target.value;
        if (value) {
            setFlag(false)
            setDB(dataBase.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1));
        }
        else {
            setDB(dataBase)
            setFlag(true)
        }
    }


    return (
        <div>
            <h2>{titles}</h2>
            <MySeach type="text" placeholder="Поиск..." onChange={searhElem} />
            {newDB.map((post, index) =>
                < ItemElement
                    post={post}
                    key={post.id}
                    number={index}
                    chechIdElements={chechIdElements}
                />).reverse()}
        </div>
    );
}

