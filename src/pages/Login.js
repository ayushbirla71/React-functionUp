import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Login = () => {
  let [email, setEmail]=useState('');
  let [password,setPassword]=useState('');
  let [token,setToken]=useState('')

  const loinButton=(event)=>{
    axios.post("http://localhost:3001/login",{email,password})
    .then((res)=>{ setToken(res.data.data.token)})
    .then((res)=>{ alert("login sucssesfull")})
    .catch((err)=> alert(err.response.data.message))
  }

  useEffect(() => {
   
    localStorage.setItem('Token', token)
})

  return (
    <div>
      
      <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default" onClick={()=>{loinButton()}}>Submit</button>
  <p>{}</p>
     
    </div>  
  )
}
export default Login;

{/* <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default" onClick={()=>{loinButton()}}>Submit</button>
  <p>{}</p>
</form> */}