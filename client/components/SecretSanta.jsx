import React from 'react'

class SecretSanta extends React.Component {
    state = {
        //some state
    }

    render() {
        return (
            <div>
                here is a current secret Santa group you are in: <br/>
                Name: {this.props.santaGroup.name}
                {/* Items: {
                    this.props.items.map((item))
                } */}
            </div>
        )
    }
}

export default SecretSanta