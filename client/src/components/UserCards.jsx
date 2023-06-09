import React,{useState,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import axios from 'axios'
import './UserCards.css'
function UserCards({getTeamate}) {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/api/users/getAll")
    .then((res)=>{setData(res.data)
    console.log(res);
    })
    .catch((err)=>{console.log(err)})
  },[])
  console.log(data);
  return (
    <>
    <center><h1>User Cards</h1> </center>
<div className='container'>
      {
          data.map((e)=>{
            return(
              <Link to='/Userstemates' className='TeamCard' >
              <div className='userCard' onClick={()=>{
                getTeamate(e)
              }}>
                  <img src={e.userImage}  style={{width:'100%',height:'100%'}}/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="button" value="Detele User"  onClick={()=>{
                    axios.delete("http://localhost:3000/api/users/"+e.users_id)
                    .then(res=>console.log(res))
                    .then(err=>console.log(err))
                   }}/>
                  <input type="button" value="Update User" />
              </div>
              </Link>
             
            )
          })

      }
      
   
</div>
</>

  )
}

export default UserCards