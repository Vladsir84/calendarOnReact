/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import RenderHour from './RenderHour.jsx'
import { generateNumbersRange } from '../FunctionsAndUtils/TimeUtils.jsx'

class RenderDay extends Component {

  state = {

    days: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  };

  render() {

    const getDays = this.state.days.slice()

    return (
      <div className="calendar-visualization">
        {generateNumbersRange(1, 23).map((num) =>
          <div className="emptyRow"
            key={Math.random()}
            time={num - 10 < 0 ? `0${num}:00` : `${num}:00`}
          >
            {getDays.map(() =>
              <RenderHour
                key={Math.random()}
                events={this.props.events}
                time={this.props.time}
              />
            )}
          </div>
        )}
      </div>
    );
  };
}



export default RenderDay;