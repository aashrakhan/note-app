import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../config'

const Home = () => {
  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home