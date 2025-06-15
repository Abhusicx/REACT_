import React, { useEffect } from 'react'
import Logout from './Logout'
import Login from './Login'

const Auth = () => {
    const token = localStorage.getItem("token")
    useEffect(() => {
        localStorage.getItem("token")
    })
  return (
    <div>
      <h1>{token}</h1>
      {
        token ? <Logout/> : <Login/>
      }
      <p>Status : {token ? "Logged In" : "Logged Out"}</p>
    </div>
  )
}

export default Auth
