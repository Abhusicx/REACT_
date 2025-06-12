import React from 'react'

const Home = () => {
  function Authenticate(){
    localStorage.setItem("token" , "true")
  }

  function SignOut(){
    localStorage.removeItem("token")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={Authenticate}>Login</button>
      <button onClick={SignOut}>Logout</button>
    </div>
  )
}

export default Home
