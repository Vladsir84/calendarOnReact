// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';


class RenderDay extends Component {

    state = {
        days: [ '', '', '', '', '', '', '']
    };

    render() {
        const getDays = this.state.days.slice()
        return (
            <div className="calendar-visualization">
                <div data-time="01:00" className="emptyRow">
                  {getDays.map((day) => 
                    <div key={day} className="emptyCell">{day}</div>
                  )}  
                </div>
                <div data-time="02:00" className="emptyRow">
                  {getDays.map((day) => 
                    <div key={day} className="emptyCell">{day}</div>
                  )}  
                </div>
            </div>

        );
    };
}

export default RenderDay;