/* eslint-disable no-unused-vars */
import React,{ Component } from 'react';
import { generateWeekRange } from './TimeUtils.jsx'


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
                        <div className="day-number">
                            {numOfWeek}
                        </div>

                    )}
                    </div>
                
            </nav>
        )
    }

}

export default Navigation;


