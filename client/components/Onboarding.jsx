import React from 'react'
import axios from 'axios'
import { Modal, ModalHeader, ModalContent, Progress, Form, Button, Icon } from 'semantic-ui-react'

class Onboarding extends React.Component {
    state = {
        progress: 0,
        '1Open': true,
        '2Open': false,
        firstName: '',
        lastName: '',
        eMail: '',
        password: ''
    }

    handleModalChange = (e) => {
        let closeKey = e.target.id.toString() + 'Open'
        let openKey = (Number(e.target.id) +1) + 'Open'
        console.log('keys:', closeKey, openKey)
        let newProgress = (Number(this.state.progress) + 1).toString()
        this.setState({
            [closeKey]: false,
            [openKey]: true,
            progress: newProgress
        })
    }

    handleFormChange = (e) => {
        let stateToChange = e.target.id
        this.setState({[stateToChange] : e.target.value})
    }

    handleUserSignup = () => {
        let user = {
            name: `${this.state.firstName} ${this.state.lastName}`,
            password: this.state.password,
            email: this.state.eMail
        }
        console.log(user)
        axios.post('/users/signup', user)
             .then((response) => {
                 console.log(response.body)
             })
             .catch((err) => console.error(err))
    }

    render() {
        return(
            <div>
            <Modal open = {this.state['1Open'] && this.props.open} size = {'tiny'} >
                <ModalHeader>
                    Welcome to your onboarding!
                    <Progress value = {this.state.progress} total='5' indicating progress = 'ratio' />
                </ModalHeader>
                <ModalContent>
                    <p>we need to get to know you!</p>
                    <Form>
                        <Form.Group widths = 'equal' onChange={this.handleFormChange} >
                            <Form.Input fluid label='First Name' placeholder= 'First Name' id= 'firstName' />
                            <Form.Input fluid label='Last Name' placeholder= 'Last Name' id= 'lastName' />
                            <Form.Input fluid label='eMail' placeholder= 'eMail' id= 'eMail' />
                            <Form.Input fluid label='password' placeholder= 'password' id= 'password' />
                        </Form.Group>
                    </Form>
                </ModalContent>
                <Modal.Actions>
                    <Button id="1" onClick = {this.handleModalChange} >Next <Icon name="right chevron" /> </Button>
                </Modal.Actions>
            </Modal>

            <Modal open = {this.state['2Open']} size = {'tiny'}>
                <ModalHeader>
                    <Progress value = {this.state.progress} total='5' indicating progress = 'ratio' />
                </ModalHeader>
                <ModalContent>
                    <p>here is the second one</p>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First Name' placeholder='First Name' />
                            <Form.Input fluid label='Last Name' placeholder='Last Name' />
                        </Form.Group>
                        <Form.TextArea style={{width: '500px'}} label="Likes" placeholder="Tell us some things that you like..." />
                </ModalContent>
                <Modal.Actions>
                    <Button id='2' onClick = {/*() => { */
                        // this.handleModalChange()
                        this.handleUserSignup
                    }>Next <Icon name="right chevron" /> </Button>
                </Modal.Actions>
            </Modal>
            </div>
        )
    }
}

export default Onboarding