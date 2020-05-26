/* eslint-disable no-unused-vars */
import React from 'react';
import { generateWeekRange } from '../FunctionsAndUtils/TimeUtils.jsx'

const Navigation = ({ monday }) => {
    
const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat',]
const weekDays = generateWeekRange(monday)

    return (
        <nav className="days-navigation">
            <div className="week">
                {weekDays.map((day) =>
                    <div key={Math.random()} className="day">
                        <div className="day-name">
                            {daysOfWeek[day.getDay()]}
                        </div>
                        <div className="day-number">
                            {day.getDate()}
                        </div>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navigation;


