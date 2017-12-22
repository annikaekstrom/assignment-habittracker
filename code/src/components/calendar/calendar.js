import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"
import CalendarDays from "./calendarDays.js"
import "./calendar.css"

const today = new Date()
const startOfMonth = moment().startOf("month")
const endOfMonth = moment().endOf("month")
const daysInMonth = dateArray.range(startOfMonth, endOfMonth, "YYYY-MM-DD", true)
const startOfWeek = moment().startOf("week")
const endOfWeek = moment().endOf("week")
const daysInWeek = dateArray.range(startOfWeek, endOfWeek, "YYYY-MM-DD", true)
const momentToday = moment().format("dddd")
const daysAgoFromToday = moment().subtract(3, "days")
const daysFromToday = moment().add(3, "days")
const thisWeek = dateArray.range(daysAgoFromToday, daysFromToday, "dddd", true)

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
        {momentToday}
        Nästa datum är
        {today.toLocaleString()}

        {/* <div>
          {daysInMonth.map(date => (
            <div className="calenderSquare">{date}</div>
          ))}
        </div> */}
        {/* <div>
          {daysInWeek.map(date => (
            <div className="calenderSquare">{date}</div>
          ))}
        </div> */}

        Här kommer Hildas funktion
        <div className="weekWrapper">
          <div className="weekDay">M</div><div className="weekDay">T</div><div className="weekDay">W</div><div className="weekDay">T</div>
          <div className="weekDay"></div>F<div className="weekDay"></div>S<div className="weekDay"></div>S<div className="weekDay"></div>

          <div className="calendarWrapper">
            {daysInWeek.map(date => (
              <CalendarDays
                dates={date}
                kryss="hej"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
