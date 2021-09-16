import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./Context"

import style from './../styles/NavBar.module.css'
export default function NavBar() {

    const { setIsAuth } = useContext(AuthContext)


    const changeAuth = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <nav className={localStorage.auth ? style.nope : style.login}>
            <ul className={style.wrap}>
                {localStorage.auth
                    ? <React.Fragment>
                        <li>
                            <Link to="/">Домой</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                        <li>
                            <Link to="/posts">Посты</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={() => changeAuth()}>Выход</Link>
                        </li>
                    </React.Fragment>

                    : <li>
                        <Link to="/login">Вход</Link>
                    </li>
                }
            </ul>
        </nav>
    )
}
