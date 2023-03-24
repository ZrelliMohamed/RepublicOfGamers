import React, { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
function SignIn() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [image,setImage]=useState('')
    
  return (
    <div>
            <table>
                <tbody>
                    <tr>
                       <td colSpan="2"><center><h1>SignIn Page</h1></center></td> 
                    </tr>
                    <tr>
                        <td>NickName</td>
                        <td><input type="text"
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>Image Url</td>
                        <td><input type="text" 
                         onChange={(e)=>{
                            setImage(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                    <td ></td> 
                    <td >
                     {name.length>0 &&
                     email.length>0 &&
                     password.length>0 &&
                     image.length>0 ?
                     <Link to='/HomePage'> <input type="button" value="SignIn" style={{width:'100%',marginTop:"5px"}}
                    onClick={()=>{
                        alert("incription succed",
                            {name,email,password,image})
                   }}
                    /></Link>
                    : 
                    <Link to='/'> <input type="button" value="SignIn" style={{width:'100%',marginTop:"5px"}}/></Link>
                }
                    <Link to='/'> 
                    <input type="button" value="Login" style={{width:'100%',marginTop:"5px"}}/>
                    </Link>
                    </td> 
                    </tr>
                </tbody>

            </table>


    </div>
  )
}

export default SignIn