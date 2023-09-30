import React, { useState } from 'react'
import './index.css'
import logo from './Razor.jpg'
import axios from 'axios'

const App = () => {
  const [data,setdata] = useState({
    username:"",
    email:"",
    password:"",
    conpassword:"",
  })
  const {username,email,password,conpassword} =data;
  const handler = e =>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = e =>{
    e.preventDefault()
   if (username.length <= 5){
    alert("username must be at least 5 character")
   }
   else if (password !== conpassword){
    alert("passwords are not matching")
   }
   else if (password === "" && conpassword === ""){
    alert("passwords are not matching")
   }
   else{
     axios.post('https://form-validatiom-testing-default-rtdb.firebaseio.com/register.json',data).then( () => alert("submitted successfully")).catch( () => alert("submitted failed"))
   }
  }
  return (
     
    <div className='main'>
      <h1 className='text'>Testing validation form.</h1>
       <img src={logo} alt=''></img>
    
      <form onSubmit={submit}>
        <input type='text' placeholder='username' value={username} name='username' onChange={handler}></input><br/><br/>
        <input type='text' placeholder='email' value={email} name='email' onChange={handler} required></input><br/><br/>
        <input type='password' placeholder='password' value={password} name='password' onChange={handler}></input><br/><br/>
        <input type='password' placeholder='Confirm password' value={conpassword} name='conpassword' onChange={handler}></input><br/><br/>
        <input type='submit' className='btn'></input>
     </form>

    </div>
  )
}

export default App;