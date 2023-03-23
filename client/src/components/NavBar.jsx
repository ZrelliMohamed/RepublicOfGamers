import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <ul className='navBar'>
    <li><Link to="/UsersProfile">My Profile</Link></li>
     <li><Link to='/HomePage'>Teams</Link></li>
     <li><Link to='/Users'>Players</Link></li>
     <li><Link to='/CreateTeam'>Create Team</Link></li>
     <li style={{paddingRight:'30px'}}><Link to='/TeamProfile'>MyTeam</Link></li>
   </ul>

  )
}

export default NavBar