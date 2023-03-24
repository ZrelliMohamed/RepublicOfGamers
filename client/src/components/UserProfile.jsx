import React from 'react'
import './userProfile.css'
function UserProfile({user,nameOfTeam}) {
  return (<>
    <div className='userProfile'>
            <div className='userImage'>
                <img src={user.userImage} />
            </div>
            <div className='userDescription'>
                <h1>{user.nickName}</h1><br />
                <h1>{user.email}</h1><br />
                <h1>{nameOfTeam}</h1><br />
                <h1>{user.role}</h1><br />
                </div> 

    </div></>
  )
}

export default UserProfile