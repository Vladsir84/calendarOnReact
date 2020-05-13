import React from 'react';


const GetHours = () => {
    return (
        <div
            className="timing__blocks"
            data-block-number='1'
        ><span className="clock">00:00</span></div>
    )
}

const RenderSidebar = () => {

        return (
            <section className="sidebar">
                 <GetHours />
                <div className="timing"></div>
                <div className="calendar-visualization"></div>

            </section>
        );
    };

export default RenderSidebar;