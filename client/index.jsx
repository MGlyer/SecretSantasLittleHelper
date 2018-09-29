import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import NewSS from './components/NewSS.jsx'

class App extends React.Component {
    state = {
        loggedIn: true
    }


    render() {
        if (!this.state.loggedIn) {
            return (
                <div>
                    Login Page!
                    <div>
                        <input type="text" name="" id=""/><input type="password" name="" id=""/>
                    </div>
                    <div>
                        <button>Login</button><br/><button>SignUp</button>
                    </div>
                </div>
            )
        } else {
            return (
                <Router>
                  <div>
                    <Nav />
                    <Switch>
                      <Route path='/profile' render = {() => <Profile />} />
                      <Route path='/newSecretSanta' render = {() => <NewSS/> } />
                    </Switch>
                  </div>    
                </Router>
            )
        }
    }
}



ReactDOM.render(<App />, document.getElementById('app'));