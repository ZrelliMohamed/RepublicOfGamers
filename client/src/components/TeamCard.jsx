import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './teamCard.css'
function TeamCard() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/api/teams/getAll")
    .then((res)=>{setData(res.data)
    console.log(res);
    })
    .catch((err)=>{console.log(err)})
  },[])
  console.log(data);
  return (<>
            <center><h1>Our Teams</h1> </center>
        <div className='container'>

               {data.length>0 &&
                  data.map((e,i)=>{
                 return ( i>0 &&
                      <Link to='/TeamProfile' className='TeamCard' >
                        <div >
                          <h1>{e.nameOfTeam}</h1>
                          <img src={e.imageOfTeam}/>
                        </div>
                      </Link>
                 )
                  })
               }
        </div>
        </>
  )
}

export default TeamCard