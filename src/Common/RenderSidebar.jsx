/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import RenderWeek from './RenderWeek.jsx'
import SidebarLine from './SidebarLine.jsx';

class RenderSidebar extends Component {

    state = {
        hours: [
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
        ]
    };

    render() {
        const getHours = this.state.hours.slice();
        return (
            <section className="sidebar">
                <div className="timing__blocks"
                >
                    {getHours.map((hour) =>
                        <span key={Math.random()} className="clock">{hour}</span>
                    )}
                </div>
                <div className="timing"></div>
                
                <SidebarLine />
                <RenderWeek />
            
            </section>
        );
    };
}

export default RenderSidebar;