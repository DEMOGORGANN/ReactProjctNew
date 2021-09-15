//import react
import React, { useContext } from "react";
import MyInput from "./UI/MyInput";
import MyButton from './UI/MyButton'
import { AuthContext } from "./Context";


const Login = () => {

    const { setIsAuth } = useContext(AuthContext)

    function a() {
        setIsAuth(true)
        localStorage.setItem('auth', true);
    }
    return (
        <div>
            <form >
                <MyInput
                    placeholder="Логин"
                    type="text" />
                <MyInput
                    placeholder="Пароль"
                    type="text" />
                <MyButton style={{ width: "100%" }} onClick={() => a()}>Отправить</MyButton>
            </form>

        </div>
    );
}

export default Login;
