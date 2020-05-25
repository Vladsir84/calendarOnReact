/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import moment from "moment";
// import { generateWeekRange } from './TimeUtils.jsx'


class Navigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',],
            date: new Date(),
        };
    }

    render() {

        const dayOfWeek = (date, days) => {
            const day = new Date(date).getDate();
            const dateInFuture = new Date(date).setDate(day + days);

            return this.state.daysOfWeek[new Date(dateInFuture).getDay()];
        };

        const formatDate = date => moment(date).format("DD");
        const daysOfNavigation = this.state.daysOfWeek.slice();
        // const { monday } = this.props.monday;
        // const arr = generateWeekRange(monday);
        // const numOfWeek = arr.slice();
        // const { onDayMove } = this.props.onDayMove;
        // const { onDayBack } = this.props.onDayBack;


        return (
            <nav className="days-navigation">
                <div className="week">
                    {daysOfNavigation.map((day) =>
                        <div key={Math.random()} className="day">
                            <div className="day-name">
                                {day}
                            </div>
                            <div className="day-number">{
                                formatDate(this.state.date)}
                            </div>
                        </div>
                    )}
                </div>

            </nav>
        )
    }

}

export default Navigation;


