import React from 'react'
import axios from 'axios'
import DayPicker from 'react-day-picker'
// import 'react-day-picker/lib/style.css';

class NewSS extends React.Component {
  state = {
    selectedDay: undefined
  }
  submitNewSecretSantaGroup = this.submitNewSecretSantaGroup.bind(this)
  handleDayClick = this.handleDayClick.bind(this)

  submitNewSecretSantaGroup() {
    let info = {}
    axios.post('/newSecretSantaGroup', info)
  }
  handleDayClick(day) {
    this.setState({ selectedDay: day})
  }

  render() {
    return (
      <div>
        <p>this is your new SS page!</p>
        <p>Everything except the Exchange Date is optional</p>
        <br/>
        <h3>Please select a day to exchange gifts!</h3>
        <DayPicker onDayClick = {this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You selected: {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day</p>
        )}
      </div>
    )
  }
}

export default NewSS