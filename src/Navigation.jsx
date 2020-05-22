/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import moment from "moment";
import { generateWeekRange } from './TimeUtils.jsx'

const formatDate = date => moment(date).format("DD");

class Navigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',]
        };
    }

    render() {

        const daysOfNavigation = this.state.daysOfWeek.slice();
        const { monday } = this.props.monday;
        const arr = generateWeekRange(monday);
        const numOfWeek = arr.slice();


        return (
            <nav className="days-navigation">
                <div className="week">
                    {daysOfNavigation.map((day) =>
                        <div key={day} className="day-name">
                            {day}
                        </div>,
                        <div key={Math.random()} className="day-number">
                            {numOfWeek}
                        </div>

                    )}
                </div>

            </nav>
        )
    }

}

export default Navigation;


