/* eslint-disable no-unused-vars */
import React,{ Component } from 'react';
import { generateWeekRange } from './TimeUtils.jsx'

// const Navigation = () => {

//     return (
//         <nav className="days-navigation">
//         <div className="week">
//             <div className="day">
//                 <div className="day-name">Sun</div>
//                 <div className="day-number">11</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">Mon</div>
//                 <div className="day-number">12</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">Tue</div>
//                 <div className="day-number">13</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">We</div>
//                 <div className="day-number">14</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">Th</div>
//                 <div className="day-number">15</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">Fr</div>
//                 <div className="day-number">16</div>
//             </div>
//             <div className="day">
//                 <div className="day-name">Sat</div>
//                 <div className="day-number">17</div>
//             </div>
//         </div>
//     </nav>

//     )
// }

// export default Navigation;



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


