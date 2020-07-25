/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import RenderHour from './RenderHour.jsx'
import { generateNumbersRange } from '../FunctionsAndUtils/TimeUtils.jsx'
import Event from '../PopupAndEvent/Event.jsx';
import RedLine from '../PopupAndEvent/RedLine.jsx';

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
    const { events, popupRender, onEventDelete } = this.props
    const getDays = this.state.days.slice()
    // const redLine = date.toDateString() === new Date().toDateString && hour === new Date().getHours();

    return (
      <div className="calendar-visualization">
        {generateNumbersRange(1, 23).map((num) =>
          // const eventsOnDay = filteredByTime(events, day);
          <div className="emptyRow"
            key={Math.random()}
          >
            {getDays.map((emptyCell) =>
              <div key={Math.random()} className="emptyCell">

                {/* {redLine && <RedLine key= {Math.random()} />} */}
                {/* { events && <Event events={events} onEventDelete={onEventDelete} date={emptyCell} /> } */}

              </div>

            )}
          </div>

        )}

      </div>
    );
  };
}



export default RenderDay;