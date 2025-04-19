import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home , Login , Signup } from './pages'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';

const App = () => {
   const [user, setUser] = useState("no-user");

   useEffect(() =>{
    onAuthStateChanged(auth , (userDetails) => {
       setUser(userDetails)
     
    })
   },[])

   if (user === "no-user") return <p>Loding....</p>
   

  return (
    <Routes>
      <Route path='/' element={user? <Home/> : <Navigate to={"/login"}/> }/>
      <Route path='/login' element={!user? <Login/> : <Navigate to={"/"}/>}/>
      <Route path='/signup' element={!user? <Signup/>  : <Navigate to={"/"}/>}/>
    </Routes>
  )
}

export default App
