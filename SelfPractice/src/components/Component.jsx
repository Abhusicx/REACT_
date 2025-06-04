import { useState } from 'react';

const Component = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [usernameError, setUsernameError] = useState('');

    function HandleClear() {
        setEmail('');
        setUsername('');
        setPassword('');
        setShow(false);
    }

    function HandleSubmit(){
        setShow(true);
    }

    function HandleUsernameChange(e) {
        const value = e.target.value;
        setUsername(value);
        if (/\d/.test(value)) {
            setUsernameError('cannot be a number');
        }
        else {
            setUsernameError('');
        }
    }

  return (
    <>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <input type="text" value={username} onChange={HandleUsernameChange} placeholder="Enter your username" />
        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />

        <button onClick={() => setShow(true)}>Submit</button>
        <button onClick={HandleClear} >Clear</button>

        {
            show && ( 
            <> 
            <h1>Username: {username}</h1> 
            <h1>Email: {email}</h1> 
            <h1>Password: {password}</h1>
            {email === 'test@gmail.com' && username === 'test' && password === 'test@123' ?
                (<h1>Form is valid</h1>) : (<h1>Form is invalid</h1>)}
            </>
            )
        }
    </>
  )
}

export default Component
