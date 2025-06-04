import { useState } from 'react'

const Component = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    function handleClear() {
        setEmail('');
        setUsername('');
        setPassword('');
        setShow(false);
    }

    function handleError(e) {
        const val = e.target.value;
        setUsername(val);
        if(/\d/.test(val)){
            setError('numbers are not allowed');
        }else{
            setError('');
        }
    }

  return (
    <>
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <br /><br />
        <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <br /><br />
        <input type='text' value={username} placeholder='username' onChange={handleError}/>
        {
            error && <p>{error}</p>
        }
        <br /><br />
        <input type='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <button onClick={handleClear}>Clear</button>
        <br /><br />
        <button onClick={() => setShow(true)}>Submit</button>

        {show && (
            <>
                <p>Email: {email}</p>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
                {
                    email && username && password ? 
                    <h1> login successful </h1> : 
                    <h1>login failed</h1>
                }
            </>
        )}
        </div>
    </>
  )
}

export default Component
