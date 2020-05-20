/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import RenderDay from './RenderDay.jsx'
import { generateWeekRange } from './TimeUtils.jsx'


const RenderWeek = () => {

    return (
        <div className="calendar-visualization">
            {generateWeekRange().map((dayCell =>
                   <RenderDay  key={dayCell}/>
                ))}
        </div>

    )
}

export default RenderWeek;