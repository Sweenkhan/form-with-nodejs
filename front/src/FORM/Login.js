import React from 'react'

function Login() {
  return (
    <div className='login'>
    <h2>Login</h2>
    <form method='post' action='http://localhost:8080/login'>
        <input type='text' name='username' placeholder='Username' /><br />
        <input type='password' name='password' placeholder='Password' /><br />
        <button type='submit' name='login'>Login</button>
    </form>

    </div>
  )
}

export default Login
// juhj