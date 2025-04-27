import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../config'
import './style.css'
const Home = () => {
  const handleLogout = () => {
    signOut(auth)
  }

  const newLocal = <button onClick={handleLogout}>Logout</button>
  return (
    <div>
      <div class="form-container">
  <label><h2>Title</h2></label>
  <input type="text" placeholder='Add title..'/>
  <br /><br />
  <label><h2>Description</h2></label>
  <input type="text" placeholder='Add description..'/>
  <br /><br />
  <button onClick={()=>{}}>Add Task</button>
</div>

<main class="board">
    <div class="column" id="todo">
      <h2>To Do</h2>
      <div class="task-card">
        <h3>Task Title</h3>
        <p>Assigned to: User 1</p>
      </div>
      <div class="task-card">
        <h3>Task Title 2</h3>
        <p>Assigned to: User 2</p>
      </div>
    </div>

    <div class="column" id="in-progress">
      <h2>In Progress</h2>
      <div class="task-card">
        <h3>Task Title 3</h3>
        <p>Assigned to: User 3</p>
      </div>
    </div>

    <div class="column" id="done">
      <h2>Done</h2>
      <div class="task-card">
        <h3>Task Title 4</h3>
        <p>Assigned to: User 4</p>
      </div>
    </div>
  </main>


    </div>
    
  )
}

export default Home