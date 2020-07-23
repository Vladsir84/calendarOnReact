/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import RenderHour from './RenderHour.jsx'
import { generateNumbersRange, filteredByTime } from '../FunctionsAndUtils/TimeUtils.jsx'

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
    const {events, index, popupRender, date} = this.props
    const getDays = this.state.days.slice()
    const event = filteredByTime(events, index);
    const id = index + 1;
  
    
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
                hour={index}
                event={event}
                date={date}
                id={id}
                popupRender={popupRender}
              />
            )}
          </div>
        )}
      </div>
    );
  };
}



export default RenderDay;