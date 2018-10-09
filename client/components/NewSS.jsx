import React from 'react'
import axios from 'axios'
import DayPicker from 'react-day-picker'
import { Form, Input, Label, Radio } from 'semantic-ui-react'
// import 'react-day-picker/lib/style.css';

class NewSS extends React.Component {
  state = {
    exchangeDay: undefined,
    startDay: undefined,
    moneyMax: 0,
    multiGift: false
  }
  submitNewSecretSantaGroup = this.submitNewSecretSantaGroup.bind(this)
  handleExchangeDayClick = this.handleExchangeDayClick.bind(this)
  handleStartDayClick = this.handleStartDayClick.bind(this)

  submitNewSecretSantaGroup() {
    let info = {}
    axios.post('/newSecretSantaGroup', info)
  }
  handleExchangeDayClick(day) {
    this.setState({ exchangeDay: day})
  }
  handleStartDayClick(day) {
    this.setState({ startDay: day})
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


      </div>
    )
  }
}

export default NewSS