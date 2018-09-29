import React from 'react'
import SecretSanta from './SecretSanta.jsx'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    state = {
        activeSecretSantas: [{name: 'the first one', items: [1, 2, 3, 'hi']}]
    }

    render() {
        return(
            <div>
                <div>this is your profile</div>
                <div>
                    <Link to='/newSecretSanta'>Make a New Secret Santa Group</Link>
                </div>
                <div>here is your current profile</div>
                <div>
                    {this.state.activeSecretSantas.map((santaGroup) => {
                        <div>
                            <SecretSanta details = {santaGroup} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Profile