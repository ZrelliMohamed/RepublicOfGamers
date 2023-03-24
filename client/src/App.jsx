import axios from 'axios'
import { useEffect, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import CreateTeam from './components/CreateTeam.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import NavBar from './components/NavBar.jsx'
import SignIn from './components/SignIn.jsx'
import TeamCard from './components/teamCard.jsx'
import TeamProfile from './components/TeamProfile.jsx'
import UserCards from './components/UserCards.jsx'
import UserProfile from './components/UserProfile.jsx'



function App() {
  // user have a teams_id
       const [user,setUser]=useState({}) 
       const [teamates,setTeamates]=useState({}) 
       const [team,setTeam]=useState([]) 



       // Our User
       const getuser=(op1)=>{
        setUser(op1)
       }
       // Team User
       const getTeam = ()=>{
        if(user){
        axios.get("http://localhost:3000/api/users/team/"+user.teams_id)
        .then((res)=>{setTeam(res.data)}).catch((err)=>console.log(err))}
       }
       useEffect(()=>{
        getTeam()
       },[user])
       console.log(teamates);
       // get One Teamate 
       const getTeamate=(op1)=>{
        setTeamates(op1)
       }
     
  return (
    <div >
     

       <Routes>
        <Route path='/' element={<Login getuser={getuser}/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/HomePage' element={<><NavBar/><TeamCard/><Footer/></>} />
        <Route path='/TeamProfile' element={<><NavBar/>
        <TeamProfile team={team} getTeamate={getTeamate}/>
        <Footer/></>} />
        <Route path='/Users' element={<><NavBar/><UserCards getTeamate={getTeamate}/><Footer/></>} />
        <Route path='/UsersProfile' element={<><NavBar/>
       { team.length && <UserProfile user={user} nameOfTeam={team[0].nameOfTeam}/>}
        <Footer/></>} />
        <Route path='/CreateTeam' element={<><NavBar/><CreateTeam/><Footer/></>} />
        <Route path='/Userstemates' element={<><NavBar/>
       { team.length && <UserProfile user={teamates} nameOfTeam={team[0].nameOfTeam}/>}
        <Footer/></>} />
       </Routes>
    



    </div>
  )
}

export default App
