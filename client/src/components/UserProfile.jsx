import React from 'react'
import './userProfile.css'
function UserProfile() {
  return (<>
    <div className='userProfile'>
            <div className='userImage'>
                <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/322392247_1603765756807807_4816882217896682145_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tuFmavuWqZQAX_uS1tl&_nc_oc=AQn0Icy3QdX6kJjClKg4rYFA1zLYogfYWXj270MnpTLDX8GLc8Ja68zSndPnVtOVGFs&_nc_ht=scontent.ftun1-2.fna&oh=00_AfC1nEF7HC_HBpJcVtGRno_xENX7uMSZ0ZEBsUcNCWcWOA&oe=6420FB8E" />
            </div>
            <div className='userDescription'>
                <h1>NickName</h1><br />
                <h1>email</h1><br />
                <h1>curent Team</h1><br />
                <h1>Role</h1><br />
                </div> 

    </div></>
  )
}

export default UserProfile