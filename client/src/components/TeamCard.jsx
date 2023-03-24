import React from 'react'
import { Link } from 'react-router-dom'
 import './teamCard.css'
function TeamCard() {
  return (<>
            <center><h1>Our Teams</h1> </center>
        <div className='container'>
                <Link to='/TeamProfile' className='TeamCard' >
                  <div >
                      TEAM 
                </div>
                </Link>
                <Link to='/TeamProfile' className='TeamCard' >
                  <div >

                </div>
                </Link>
                <Link to='/TeamProfile' className='TeamCard' >
                  <div >

                </div>
                </Link>
                <Link to='/TeamProfile' className='TeamCard' >
                  <div >

                </div>
                </Link>
        </div>
        </>
  )
}

export default TeamCard