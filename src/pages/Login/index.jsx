import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config.js';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = (e)=>{
    e.preventDefault()

//   console.log("Email" , email , "Password", password)
signInWithEmailAndPassword(auth, email, password).then(() => {
    alert("Login successfully!")
    navigate("/")
}).catch((err) => {
    alert(err.message)
})


}



  return (
    <div>
        <h1>Login</h1>

    <form>
        <input type="text" placeholder='Email' value={email} 
        onChange={(e) => {setEmail(e.target.value);}}/> 
        <br /><br />
        <input type="password" placeholder='Password' value={password}
        onChange={(e) => {setPassword(e.target.value);}}/> 
        <br /><br />
        <p>Don't have an account? <Link to={"/signup"}>Signup</Link></p>
        <button onClick={handleLogin}>Login</button>
    </form>


    </div>
  )
}

export default Login