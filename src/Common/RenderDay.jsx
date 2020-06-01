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

    createEvent: new Date(),
  };

  render() {

    const getDays = this.state.days.slice()
    return (

      <div className="calendar-visualization">
        {generateNumbersRange(0, 23).map((num) =>
          <div className="emptyRow"
            time={(num - 10 < 0) ? `0${num}:00` : `${num}:00`}
            key={Math.random()} >

            {getDays.map((dayCell) =>
              <RenderHour
                key={Math.random()}

              />
            )}

          </div>
        )}
      </div>

    );
  };
}

export default RenderDay;