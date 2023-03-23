import { useState } from 'react'
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
 
  return (
    <div >
     

       <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/HomePage' element={<><NavBar/><TeamCard/><Footer/></>} />
        <Route path='/TeamProfile' element={<><NavBar/><TeamProfile/><Footer/></>} />
        <Route path='/Users' element={<><NavBar/><UserCards/><Footer/></>} />
        <Route path='/UsersProfile' element={<><NavBar/><UserProfile/><Footer/></>} />
        <Route path='/CreateTeam' element={<><NavBar/><CreateTeam/><Footer/></>} />
       </Routes>



    </div>
  )
}

export default App
