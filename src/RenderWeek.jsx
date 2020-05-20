/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import RenderDay from './RenderDay.jsx'
// import { generateWeekRange } from './TimeUtils.jsx'


const RenderWeek = () => {

    const generateWeekRange = startDate => {
        const result = [];
        for (let i = 0; i < 23; i += 1) {
            const base = new Date(startDate);
            result.push(new Date(base.setDate(base.getDate() + i)));
        }
        return result;
    };

    return (
        <div className="calendar-visualization">
            {generateWeekRange().map((dayCell =>
                   <RenderDay  key={dayCell}/>
                ))}
        </div>

    )
}

export default RenderWeek;