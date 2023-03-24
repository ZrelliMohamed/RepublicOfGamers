import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
function Login() {
  const [nameEmail,setNameEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
        <table>
          <tbody>
          <tr>
              <td colSpan="2"><center><h1> Login Page </h1></center> </td>
            </tr>
            <tr>
              <td>User name/Email :</td>
              <td><input type="text" placeholder='Name/Email'
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
                    <td >{
                            nameEmail.length>0&&                  
                            password.length>0 ?
                        <Link to='/HomePage'><input type="button" value="Login" style={{width:'100%',marginTop:"5px"}}
                        onClick={()=>{
                          alert("Loged IN")
                        }}
                        /></Link>
                      :<input type="button" value="Login" style={{width:'100%',marginTop:"5px"}}/>}
                   
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