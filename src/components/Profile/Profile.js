import LoginForm from '../Login/LoginForm'
const Profile = ({Login, user,  Logout}) =>{
    
    return (
    <div className="">
       <h1>Please Login!</h1>
    {(user.email != "") ? (
      <div className = "welcome">
      <h2>Welcome, <span>{user.email}</span></h2>
      <button onClick = {Logout}>Logout</button>
      </div>
    ): (
      <LoginForm Login = {Login}/>
      
    )}
    </div>
  );
}
export default Profile;