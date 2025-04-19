import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config.js';
import { Link } from 'react-router-dom';

const Signup = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = (e)=>{
    e.preventDefault()

//   console.log("Email" , email , "Password", password)
createUserWithEmailAndPassword(auth, email, password).then(() => {
    alert("Signup successfully!")
}).catch((err) => {
    alert(err.message)
})


}



  return (
    <div>
        <h1>Signup</h1>

    <form>
        <input type="text" placeholder='Email' value={email} 
        onChange={(e) => {setEmail(e.target.value);}}/> 
        <br /><br />
        <input type="password" placeholder='Password' value={password}
        onChange={(e) => {setPassword(e.target.value);}}/> 
        <br /><br />
        <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        <button onClick={handleSignup}>Signup</button>
    </form>


    </div>
  )
}

export default Signup