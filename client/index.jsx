import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import NewSS from './components/NewSS.jsx'
import Onboarding from './components/Onboarding.jsx'
import { Modal, ModalContent, Button, Icon, Input } from 'semantic-ui-react'

class App extends React.Component {
    state = {
        loggedIn: true,
        username: '',
        password: '',
        onboarding: false
    }
    
    handleLogout = () => {
      this.setState({loggedIn: false})
    }
    handleLogin = () => {
      this.setState({loggedIn: true})
    }
    handleSignup = () => {
      this.setState({loggedIn: true, onboarding: true})
    }
    handleValueChange = (e) => {
      e.preventDefault()
      let toChange = e.target.className
      this.setState({[toChange]: e.target.value})
    }


    render() {
        if (!this.state.loggedIn) {
            return (
                <div>
                    Login Page!
                    <div>
                        <Input onChange = {this.handleValueChange} type="text" className= 'username' placeholder = 'username' />
                        <Input onChange = {this.handleValueChange} type="password" className = 'password' placeholder = 'password' />
                    </div>
                    <div>
                        <Button onClick={this.handleLogin} >Login</Button><br/>
                        <Button onClick={this.handleSignup}>SignUp</Button>
                    </div>
                </div>
            )
          } else {
            return (
              <Router>
                  <div>
                    <Nav handleLogout = {this.handleLogout}/>
                    <Switch>
                      <Route path='/profile' render = {() => <Profile />} />
                      <Route path='/newSecretSanta' render = {() => <NewSS/> } />
                    </Switch>
                    <Onboarding open = {this.state.onboarding} />
                  </div>    
                </Router>
            )
        }
    }
}



ReactDOM.render(<App />, document.getElementById('app'));