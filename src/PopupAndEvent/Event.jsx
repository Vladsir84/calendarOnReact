/* eslint-disable no-unused-vars */
import React from 'react';

const Event = () => {

    const events = [
        {
            title: 'One',
            date: '2020-05-26',
            startTime: '12:00',
            endTime: '12:30',
            description: 'first',
        },

        // {
        //     title: 'Two',
        //     date: '2020-05-28',
        //     startTime: '14:00',
        //     endTime: '14:30',
        //     description: 'second',
        // },

        // {
        //     title: 'Three',
        //     date: '2020-05-29',
        //     startTime: '15:00',
        //     endTime: '15:30',
        //     description: 'third',
        // },

        // {
        //     title: 'Four',
        //     date: '2020-05-30',
        //     startTime: '12:00',
        //     endTime: '12:30',
        //     description: 'fourth',
        // },


        // {
        //     title: 'Five',
        //     date: '2020-05-31',
        //     startTime: '17:00',
        //     endTime: '17:30',
        //     description: 'fifth',
        // },

        // {
        //     title: 'Six',
        //     date: '2020-06-01',
        //     startTime: '18:00',
        //     endTime: '18:30',
        //     description: 'sixth',
        // },
    ]

    return (

        <div key={Math.random()} className="active_event">
            {events.map((event) =>
                `${event.title} 
                 ${event.startTime}
                 ${event.endTime}`
            )}
        </div>

    )
}


export default Event;