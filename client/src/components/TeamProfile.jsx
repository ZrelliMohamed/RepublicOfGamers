import React from 'react'
import './TeamProfile.css'
import {Routes,Route,Link} from 'react-router-dom'
function TeamProfile({team,getTeamate}) {
  return (<>
    <div className='TeamName'>
    Team : {team[0].nameOfTeam}
</div>
   <div className='Container'>
        
            
            <div className='image'>
            <img  src={team[0].imageOfTeam} />
            </div>
            <div className='desc'>
            {team[0].description}
            </div>
            <div className='member'>
                
                <ul>
                    {
                        team.map((e,i)=>{
                            return(  <li>
                                <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                                    <Link to='/Userstemates' onClick={()=>{
                                        getTeamate(e)
                                    }}>{e.nickName}</Link> 
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        <div>
            <center><h2>Trophies</h2></center> 
            <img src='https://w7.pngwing.com/pngs/126/721/png-transparent-crystal-decor-trophy-crystal-euclidean-crystal-trophy-material-glass-medal-happy-birthday-vector-images-thumbnail.png'/>
        </div>

    </div>
        <h2>Captain Team: {team[0].nickName}</h2>
    </>
  )
}

export default TeamProfile