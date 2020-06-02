/* eslint-disable no-unused-vars */
import React from 'react';
import moment from 'moment';
import Event from '../PopupAndEvent/Event.jsx';

const RenderHour = ({ events }) => {

    return (
        <div
            key={Math.random()}
            className="emptyCell"
        >
            {/* {events.startTime ===
                this.props.time ?  */}
            <Event events={events} />
            {/* } */}
        </div>
    );
};

export default RenderHour;