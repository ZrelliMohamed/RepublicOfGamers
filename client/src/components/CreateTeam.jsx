import axios from 'axios'
import React, { useState } from 'react'

function CreateTeam() {
    const [name,setname]=useState("")
    const [desc,setdesc]=useState("")
    const [img,setimg]=useState("")
    const [msg,setmsg]=useState("")
console.log(name,desc,img);
  return (
    <div style={{width:'100%'}}>
            <center>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='2'><center><h1>Create Your Own Team</h1></center></td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                        <input type='text' style={{width:'100%'}}
                        onChange={(e)=>{
                            setimg(e.target.value)
                        }}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                        <input type='text' style={{width:'100%'}}
                         onChange={(e)=>{
                            setname(e.target.value)
                        }}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                        <textarea type='text' style={{width:'100%'}}
                           onChange={(e)=>{
                            setdesc(e.target.value)
                        }}
                        />
                        </td>
                    </tr>
                    <tr>
                        

                        <td colSpan='2'>
                    <h2>{msg}</h2>
                            <center>{msg.length===0&&<input type="button" value="Create" style={{width:'100%'
                        ,fontFamily:'cursive'
                        ,height:'40px'
                    }}
                    onClick={()=>{
                        axios.post("http://localhost:3000/api/teams/add",{nameOfTeam:name,description:desc,imageOfTeam:img})
                        .then(res=>setmsg('Created Succesfully'))
                        .catch(err=>console.log(err))
                    }}
                    
                    />}</center></td>
                    </tr>
                </tbody>
            </table>
            </center>
    </div>
  )
}

export default CreateTeam