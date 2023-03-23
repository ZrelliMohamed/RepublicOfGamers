import React from 'react'
import './TeamProfile.css'
import {Routes,Route,Link} from 'react-router-dom'
function TeamProfile() {
  return (<>
    <div className='TeamName'>
    Team : Team Name
</div>
   <div className='Container'>
        
            
            <div className='image'>
            <img  src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/322392247_1603765756807807_4816882217896682145_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tuFmavuWqZQAX_uS1tl&_nc_oc=AQn0Icy3QdX6kJjClKg4rYFA1zLYogfYWXj270MnpTLDX8GLc8Ja68zSndPnVtOVGFs&_nc_ht=scontent.ftun1-2.fna&oh=00_AfC1nEF7HC_HBpJcVtGRno_xENX7uMSZ0ZEBsUcNCWcWOA&oe=6420FB8E" />
            </div>
            <div className='desc'>
                Team Description
            </div>
            <div className='member'>
                
                <ul>
                    <li>
                        <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                        <Link to='/UsersProfile'>member 1</Link> 
                    </li>
                    <li>
                    <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                    <Link to='/UsersProfile'>member 2</Link> 
                    </li>
                    <li>
                    <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                    <Link to='/UsersProfile'>member 3</Link> 
                    </li>
                    <li>
                    <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                    <Link to='/UsersProfile'>member 4</Link> 
                    </li>
                    <li>
                    <img src='https://cdn2.iconfinder.com/data/icons/esports-malibu-vol-1/128/gamer-512.png'/>
                    <Link to='/UsersProfile'>member 5</Link> 
                    </li>
                </ul>
            </div>
        <div>
            <center><h2>No Trophies</h2></center> 
            <img src='https://assets.stickpng.com/images/58eeb800ee9418469d17ee07.png'/>
        </div>

    </div>
        <h2>Captain Team: Name user</h2>
    </>
  )
}

export default TeamProfile