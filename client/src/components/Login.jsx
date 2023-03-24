import React,{useEffect, useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import axios from 'axios'
function Login({getuser}) {
  const [nameEmail,setNameEmail]=useState('')
  const [password,setPassword]=useState('')
  const [msg,setmsg]=useState('')
  const [LogIn,setLogIn]=useState(false)
  
  const getUser =()=>{
    axios.get('http://localhost:3000/api/users/'+nameEmail)
    .then((res)=>{
      getuser(res.data[0]);
      if(res.data[0].password===password){
        setLogIn(true)
      }
    }).catch((err)=>setmsg('Invalid Email Or PassWord'))
  }
 

  return (
    <div>
        <table>
          <tbody>
          <tr>
              <td colSpan="2"><center><h1> Login Page </h1></center> </td>
            </tr>
            <tr>
              <td>Email :</td>
              <td><input type="text" placeholder='Email'
                onChange={(e)=>{
                  setNameEmail(e.target.value)
              }}
              /> </td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="text" placeholder='********'
                onChange={(e)=>{
                  setPassword(e.target.value)
              }}
              /></td>
            </tr>
            <tr>
                    <td ></td> 
                    <td >
                          <p>{msg}</p>
                      {  LogIn === true&&
                            nameEmail.length>0&&                  
                            password.length>0 ?
                        <Link to='/HomePage'><input type="button" value="Login" style={{width:'100%',marginTop:"5px"}}
                        onClick={()=>{
                          getUser()
                        }}
                        /></Link>
                      :<input type="button" value="Login" style={{width:'100%',marginTop:"5px"}} 
                      onClick={()=>{
                        getUser()
                      }}/>}

                      <Link to='/SignIn'> 
                        <input type="button" value="SignIn" style={{width:'100%',marginTop:"5px"}}/>
                      </Link>
                    </td> 
                    </tr>
          </tbody>

        </table>


    </div>
  )
}

export default Login