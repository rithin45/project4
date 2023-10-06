import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
const [u,uv]=useState('');
const [p,pv]=useState('');
const [error,setError]=useState(false);

const rdusername=(event)=>{
  event.preventDefault();
    console.log(event.target.value);
uv(event.target.value);
}
const rdpassword=(event)=>{
  event.preventDefault();
    console.log(event.target.value);
pv(event.target.value);
}
const checkfilldata=(event)=>{
  event.preventDefault();
  if(u.trim()===''||p==='')
  {
  setError(true);
return;
  }
  else{
    setError(false);
  }
}

  return (
    <div>
        <form>
        <h1>SIGN UP</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined"  onChange={rdusername}/><br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" onChange={rdpassword}/><br/>
      <button type="submit" onClick={checkfilldata}><Link to='/Home'>Submit</Link></button>
      </form>
    </div>
  )
}

export default Login
