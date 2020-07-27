/* eslint-disable no-unused-vars */
import React from 'react';
import { generateWeekRange } from '../GatewaysAndUtils/TimeUtils.jsx'
import Event from '../PopupAndEvent/Event.jsx';


const Day = ({ events, onEventDelete, monday }) => {

  const onWeekDays = generateWeekRange(monday);
 
  return (

    <div className="calendar-visualization">
      {onWeekDays.map((day) =>
        <div className="calendar-day"
          key={day}
          day={day}
        >

          <Event
            events={events}
            onEventDelete={onEventDelete}
            day={day}
          />
        </div>

      )}

    </div>
  );
};


export default Day;