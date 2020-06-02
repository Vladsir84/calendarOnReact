/* eslint-disable no-unused-vars */
import React, { Component } from 'react';


class Event extends Component {


    render() {

        return (

            <div key={Math.random()} className="active_event">
                {this.props.events.map((event) =>
                    `${event.title} 
                 ${event.startTime}
                 ${event.endTime}`
                )}
            </div>

        );
    };
};

export default Event;