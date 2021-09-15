//import react
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//import components
import PostsItem from "./components/PostsItem";
import AboutUs from "./components/AboutUs"
import NavBar from "./components/NavBar";
import ErrorURL from "./components/ErrorURL";
import PageElement from "./components/PageElement";
import Login from "./components/Login";
import { AuthContext } from "./components/Context";

//import css
import "./styles/app.css"




function App() {
  const [posts, setPosts] = useState("")
  const [numberId, transferNumber] = useState("")
  const [isAuth, setIsAuth] = useState(null)


  const addElemInDB = (post) => {
    setPosts([...posts, { ...post }])
  }

  const deleteElemInDB = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const fetchGetPost = async () => {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(responce.data)
  }

  useEffect(() => {
    fetchGetPost()
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {localStorage.auth
            ?



            <Switch>
              <Route exact path="/">
                sfdfsd
              </Route>
              <Route exact path="/posts">
                <PostsItem
                  titles="Компоненты JAVA-SCRIPT"
                  dataBase={posts}
                  deleteElemInDB={deleteElemInDB}
                  setPosts={setPosts}
                  addElemInDB={addElemInDB}
                  transferNumber={transferNumber}
                />
              </Route>

              <Route path="/about">
                <AboutUs />
              </Route>

              <Route path="/error">
                <ErrorURL />
              </Route>

              <Route exact path="/post/:id">
                <PageElement numberId={numberId} />
              </Route>
              <Redirect to="/posts" />
            </Switch>




            :
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect to="/login" />
            </Switch>
          }



        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
