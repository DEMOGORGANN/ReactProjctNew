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

    function chechIdElements(idElement) {
        deleteElemInDB(idElement)
    }


    return (
        <div>
            <h2>{titles}</h2>
            <MySeach type="text" placeholder="Поиск..." onChange={searhElem} />
            {newDB.length === 0
                ? <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
                : newDB.map((post, index) =>
                    < ItemElement
                        post={post}
                        key={post.id}
                        number={index}
                        chechIdElements={chechIdElements}
                    />).reverse()

            }
        </div>
    );
}

