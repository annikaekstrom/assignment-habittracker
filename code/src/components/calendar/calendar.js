import React from "react"
import "./calendar.css"

const today = new Date()

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="calendarPage">
        Här ska det komma en kalender
        {today.toLocaleString()}
      </div>
    )
  }
}
