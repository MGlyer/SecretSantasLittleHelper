import React from 'react'
import Nav from './Nav.jsx'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    state = {
        //some state
    }

    render() {
        return(
            <div>
                <div>this is your profile</div>
                <div>
                    <Link to='/newSecretSanta'>Make a New Secret Santa Group</Link>
                </div>
                <div>here is your current profile</div>
            </div>
        )
    }
}

export default Profile