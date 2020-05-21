/* eslint-disable no-unused-vars */
import React from 'react';
import RenderDay from './RenderDay.jsx'
import { generateDayRange } from './TimeUtils.jsx'


const RenderWeek = () => {

    return (
        <div className="calendar-visualization">
            {generateDayRange().map((dayCell =>
                   <RenderDay  key={dayCell}/>
                ))}
        </div>

    )
}

export default RenderWeek;