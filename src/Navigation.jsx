/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { generateWeekRange } from './TimeUtils.jsx'


class Navigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            daysOfWeek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',],
         
        };
    }
   
    render() {
        
  
        const daysOfNavigation = this.state.daysOfWeek.slice();
        console.log(this.props.monday)
        const arr = generateWeekRange(this.props.monday);
        console.log(arr)
        const numOfDate  = arr.map(el => el.getDate());
        let el = 0;
       
        return (
            <nav className="days-navigation">
                <div className="week">
                    {daysOfNavigation.map((day) =>
                        <div key={Math.random()} className="day">
                            <div className="day-name">
                                {day}
                            </div>
                            <div className="day-number">{
                              numOfDate[el++]}
                            </div>
                        </div>
                    )}
                </div>

            </nav>
        )
    }

}

export default Navigation;


