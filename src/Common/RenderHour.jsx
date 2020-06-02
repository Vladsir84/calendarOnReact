/* eslint-disable no-unused-vars */
import React from 'react';
import moment from 'moment';
import Event from '../PopupAndEvent/Event.jsx';

const RenderHour = ({ events }) => {
const time = new Date();

    return (
        <div
            key={Math.random()}
            className="emptyCell"
        >
             {events.startTime ===
                time ? <Event events={events} /> : ''}
            
        </div>
    );
};

export default RenderHour;