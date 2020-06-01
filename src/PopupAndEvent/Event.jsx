/* eslint-disable no-unused-vars */
import React, { Component } from 'react';


class Event extends Component {
    state = {
        events: [

            {
                id: 1,
                title: 'One',
                date: '2020-05-26',
                startTime: '16:00',
                endTime: '16:30',
                description: 'first',
            },

            // {
            //     id: 2,
            //     title: 'Two',
            //     date: '2020-05-28',
            //     startTime: '14:00',
            //     endTime: '14:30',
            //     description: 'second',
            // },

            // {
            //     id: 3,
            //     title: 'Three',
            //     date: '2020-05-29',
            //     startTime: '15:00',
            //     endTime: '15:30',
            //     description: 'third',
            // },

            // {
            //     id: 4,
            //     title: 'Four',
            //     date: '2020-05-30',
            //     startTime: '12:00',
            //     endTime: '12:30',
            //     description: 'fourth',
            // },


            // {
            //     id: 5,
            //     title: 'Five',
            //     date: '2020-05-31',
            //     startTime: '17:00',
            //     endTime: '17:30',
            //     description: 'fifth',
            // },

            // {
            //     id: 6,
            //     title: 'Six',
            //     date: '2020-06-01',
            //     startTime: '18:00',
            //     endTime: '18:30',
            //     description: 'sixth',
            // },
        ]
    };

    

    render() {

        return (

            <div key={Math.random()} className="active_event">
                {this.state.events.map((event) =>
                    `${event.title} 
                 ${event.startTime}
                 ${event.endTime}`
                )}
            </div>

        );
    };
};

export default Event;