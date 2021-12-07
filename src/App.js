import Welcome from './components/Welcome/Welcome';
import './App.css'
import Profile from './components/Profile/Profile'; 
import PostsPage from './components/Posts/Posts'; 
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import LoginMain from './components/Login/LoginMain';
import LoginForm from './components/Login/LoginForm';

function App() {
  const adminUser  = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email:"", password: ""});
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  
  const getProfileElement = () => {
    if (userId == null)
      return (<LoginForm
                setToken = {setToken}
                setUserId = {setUserId}
              />)
    else
      return (<Profile/>)
  }
  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    {
      setUser({
        name: details.name,
        email: details.email
      })
      console.log("Logged in")
    }else {
      console.log("Details do not match!")
    }
  
  }
  const Logout = () => {
    setUser({name:"", email: ""});
  }
  return (
    <BrowserRouter>
      <nav id = "header">
          <ul id = "nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="app-container">
          <Routes>
            <Route path="/" element={
                 <Welcome
                  name = "Thanh"
                  age = {20}
                  class_name = "color-pink"/>
              }/>
             <Route path="/posts" element={
              <PostsPage/>}/>
            <Route path="/profile" element={
             getProfileElement()}
            />
            <Route path="/login" element={
              <LoginForm
                setToken = {setToken}
                setUserId = {setUserId}
              />}/>
          </Routes>
          </div>
    </BrowserRouter>
  )
};

export default App;
