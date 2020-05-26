/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { generateWeekRange } from './TimeUtils.jsx'


class Navigation extends Component {

    state = {

        daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',],

    };


    render() {


        const daysOfNavigation = this.state.daysOfWeek.slice();
        const arr = generateWeekRange(this.props.monday);
        console.log(this.props.monday);
        const numOfDate = arr.map(el => el.getDate());
        console.log(arr);

        return (
            <nav className="days-navigation">
                <div className="week">
                    {daysOfNavigation.map((day) =>
                        <div key={Math.random()} className="day">
                            <div className="day-name">
                                {day}
                            </div>
                            <div className="day-number">{
                                numOfDate}
                            </div>
                        </div>
                    )}
                </div>

            </nav>
        )
    }

}

export default Navigation;


