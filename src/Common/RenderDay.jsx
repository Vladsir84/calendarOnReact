/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import Event from '../PopupAndEvent/Event.jsx';

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
    ]
  };

  render() {

    const getDays = this.state.days.slice()
    return (

      <div className="calendar-visualization">
        <div className="emptyRow">
          {getDays.map((day) =>
            <div key={Math.random()} className="emptyCell">{day}<Event />
            </div>
          )}
         
        </div>
      </div>

    );
  };
}

export default RenderDay;