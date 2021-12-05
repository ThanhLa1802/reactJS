
import React, {useState} from 'react'
import LoginForm from './LoginForm'
function LoginMain() {
  const adminUser  = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email: ""});
  const [error, setError] = useState("");
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
    <div className="App">
    {(user.email != "") ? (
      <div className = "welcome">
      <h2>Welcome, <span>{user.email}</span></h2>
      <button onClick = {Logout}>Logout</button>
      </div>
    ): (
      <LoginForm Login = {Login} error = {error}/>
    )}
    </div>
  );
}

export default LoginMain;
