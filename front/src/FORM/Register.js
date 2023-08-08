import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  function handleRegister(e){
    e.preventDefault()
         axios.post('http://localhost:8080/register', {name, email, phone, username, password})
         .then((result) =>{
             if(result.data === "success"){
                navigate('/login')
             }
         })
  }
  return (
    <div className='register'>

    <div className='registerCnt'> 
      <h2>Register</h2>
      <form method='post' onSubmit={handleRegister}>
        <input type='text' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} /><br />
        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type='number' name='phone' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} /><br />
        <input type='text' name='username' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} /><br />
        <input type='password' name='password' placeholder='Password'value={password} onChange={e => setPassword(e.target.value)} /><br />
        <div className='btns'> <button type='submit' name='register'>Submit</button>
        <Link to="/login">Login</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register