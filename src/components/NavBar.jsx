import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./Context"
export default function NavBar() {

    const { isAuth, setIsAuth } = useContext(AuthContext)


    const changeAuth = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <nav>
            {localStorage.auth
                ? <ul>
                    <li>
                        <Link to="/">Домой</Link>
                    </li><li>
                        <Link to="/about">О нас</Link>
                    </li><li>
                        <Link to="/posts">посты</Link>
                    </li><li>
                        <Link to="/login" onClick={() => changeAuth()}>Выход</Link>
                    </li>

                </ul>
                : <li>
                    <Link to="/login">Вход</Link>
                </li>
            }
        </nav>
    )
}