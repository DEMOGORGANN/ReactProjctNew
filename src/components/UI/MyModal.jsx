//import React
import React from "react";

//import css
import style from './../../styles/MyModal.module.css';


export default function MyModal({ children, visible, setVisible }) {

    const rootClasses = [style.myModal];

    if (visible) {
        rootClasses.push(style.active);
    }


    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}