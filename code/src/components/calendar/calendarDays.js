import React from "react"
import "./calendar.css"

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weekMatches: []
    }
  }

  componentDidMount() {
    // console.log("the weeks dates:", this.props.daysInWeek)
    // console.log("the checked dates:", this.props.checkedDates)
    if (this.props.checkedDates) {
      const isMatch = this.props.daysInWeek.map(date => {
        return this.props.checkedDates.find(d => (
          d === date
        ))
      })
      // console.log("Matching dates", isMatch)
      this.setState({
        weekMatches: isMatch
      })
      console.log("State dates", isMatch)
      console.log("Counter", this.state.matchCount)
    }
  }

  render() {
    return (
      <div className="calendarLine">
        <div className="taskInfo">
          {this.props.symbol &&
            <img src={this.props.symbol} alt="" />
          }
          {this.props.times > 0 &&
            <div className="jknf">x{this.props.times}</div>
          }
        </div>

        <div className="calendarLineRight">
          {this.state.weekMatches.map(day => (
            <div className="calendarBox">
              {day !== undefined &&
                <img src={this.props.symbol} alt="" />
              }
            </div>
          ))}
        </div>

      </div>
    )
  }
}
