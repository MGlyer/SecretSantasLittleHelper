import React from 'react'
import axios from 'axios'
import DayPicker from 'react-day-picker'
import { Form, Input, Label, Button } from 'semantic-ui-react'
import moment from 'moment'
// import 'react-day-picker/lib/style.css';

class NewSS extends React.Component {
  state = {
    startDay: undefined,
    exchangeDay: undefined,
    moneyMax: 0,
    multiGift: false,
    groupId: '',
    toInvite: [],
    individualToInvite: ''
  }

  submitNewSecretSantaGroup = () => {
    let {startDay, exchangeDay, moneyMax, multiGift} = this.state
    let info = {
      startDay: moment(startDay).format('ddd, MMM Do'), 
      exchangeDay: moment(exchangeDay).format('ddd, MMM Do'), 
      moneyMax, multiGift
    }
    axios.post('/newSecretSantaGroup/basicInfo', info)
        .then((response) => {
          if (response.data === 'error') {
            //more action later
            console.log('something went wrong...')
          } else {
            //more action later
            console.log('success!', response.data)
            this.setState({groupId: response.data['_id']})
          }
        })
        .catch((error) => console.error(error))
  }
  handleExchangeDayClick = (day) => {
    this.setState({ exchangeDay: day})
  }
  handleStartDayClick = (day) => {
    this.setState({ startDay: day})
  }
  handleInitialInvites = () => {
    let info = {
      invites: this.state.toInvite,
      groupId: this.state.groupId
    }
    axios.post('/newSecretSantaGroup/initialInvites', info)
         .then((response) => {
           console.log('emails sent to: ', response.data)
         })
         .catch(error => console.error(error) )
  }
  handleIndivitualInvite = (e) => {
    this.setState({individualToInvite: e.target.value})
  }
  addToInviteList = () => {
    let temp = this.state.toInvite
    temp.push(this.state.individualToInvite)
    this.setState({individualToInvite: '', toInvite: temp})
  }
  removeFromInviteList = (i) => {
    let temp = this.state.toInvite
    temp.splice(i, 1)
    this.setState({toInvite: temp})
  }

  render() {
    return (
      <div>

        <div className="startDateBox">
          <h3>What day does everyone need to be signed up by?</h3>
          <p>We'll give everyone their assigned Giftee on this date</p>
          <DayPicker onDayClick = {this.handleStartDayClick} />
          {this.state.startDay ? (
            <p>You selected: {this.state.startDay.toLocaleDateString()}</p>
          ) : (
            <p>Please select a day</p>
          )}
        </div>

          <br/>
        <div className='exchangeDateBox'>
        <h3>Please select a day to exchange gifts!</h3>
          <DayPicker onDayClick = {this.handleExchangeDayClick} />
          {this.state.exchangeDay ? (
            <p>You selected: {this.state.exchangeDay.toLocaleDateString()}</p>
          ) : (
            <p>Please select a day</p>
          )}
        </div>

        <br/>
        <div className="money">
          <h3>What should the gift limit be?</h3>
          <Input onChange = {e => this.setState({ moneyMax: e.target.value})}>
          <Label basic>$</Label>
          <input/>
          <Label>.00</Label>
          </Input>
        </div>
        <br/>

        <div className="specifications">
          {/* <Form.Input fluid label="" /> */}
          <Form.Group inline>
            <h3>Multiple Gifts ok?</h3>
            <Form.Radio label='Yes' value = 'yes' onChange = {e => this.setState({multiGift: true})} />
            <Form.Radio label='No' value = 'no' onChange = {e => this.setState({multiGift: false})} />
          </Form.Group>
          {/* <Form.Input/> */}
        </div>

        <button onClick={this.submitNewSecretSantaGroup} >submit this Secret Santa</button>

        <div>
          <h3>Who would you like to invite?</h3>
          <h5>Please enter a valid email address and hit 'Add'</h5>
          <div>
            {this.state.toInvite.map((indiv, ind) => {
              return(
                <div key={ind}>
                  <span>{indiv}</span>
                  <Button icon = 'close' onClick={() => this.removeFromInviteList(ind)}/>
                </div>
              )
            })}
          </div>
          <Input onChange={this.handleIndivitualInvite} value={this.state.individualToInvite} />
          <button onClick={this.addToInviteList} >Add</button>
          <button onClick={this.handleInitialInvites} >submit invites</button>
        </div>
      </div>
    )
  }
}

export default NewSS