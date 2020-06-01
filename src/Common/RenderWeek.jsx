/* eslint-disable no-unused-vars */
import React from 'react';
import RenderDay from './RenderDay.jsx'
import { generateDayRange } from '../FunctionsAndUtils/TimeUtils.jsx'


const RenderWeek = () => {

    return (
        <div className="calendar-visualization">
            {generateDayRange().map((dayCell =>
                   <RenderDay  key={Math.random()} />
                ))}
        </div>

    )
}

export default RenderWeek;