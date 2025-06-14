import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../slice/authSlice'

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <div>
      <h2>logout page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
