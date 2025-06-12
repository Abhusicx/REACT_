import React, { useRef } from 'react'

const Home = () => {

  const btn = useRef()
  function login(){
    localStorage.setItem("token" , "true")
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.clear()
    btn.current.style.color = "blue";
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button ref={btn} onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
