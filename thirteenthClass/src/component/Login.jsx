import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../slice/authSlice'

const Login = () => {
    const dispatch = useDispatch()

    function handlelogin(){
        const dummyToken = 'fd;dfpogiplgkdfpogflkhgfoijhsdogj';
        dispatch(login(dummyToken))
    }
  return (
    <div>
      <h2>login page</h2>
      <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login
