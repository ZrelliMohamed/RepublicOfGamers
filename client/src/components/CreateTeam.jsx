import React from 'react'

function CreateTeam() {
  return (
    <div style={{width:'100%'}}>
            <center>
            <table>
                <tbody>
                    <tr>
                        <td colSpan='2'><center><h1>Create Your Own Team</h1></center></td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                        <input type='text' style={{width:'100%'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                        <input type='text' style={{width:'100%'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                        <textarea type='text' style={{width:'100%'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'><center><input type="button" value="Create" style={{width:'100%'
                        ,fontFamily:'cursive'
                        ,height:'40px'
                    }}/></center></td>
                    </tr>
                </tbody>
            </table>
            </center>
    </div>
  )
}

export default CreateTeam