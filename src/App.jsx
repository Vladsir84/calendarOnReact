/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './HeaderComponents/Header.jsx'
import Navigation from './HeaderComponents/Navigation.jsx';
import { getStartOfWeek } from './FunctionsAndUtils/TimeUtils.jsx';
import Popup from './PopupAndEvent/Popup.jsx';
import Calendar from './Common/Calendar.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monday: getStartOfWeek(new Date()),
            isPopupRendered: false,
            events: [

                {
                    id: 1,
                    title: 'One',
                    date: '2020-05-26',
                    startTime: '16:00',
                    endTime: '16:30',
                    description: 'first',
                },
    
                // {
                //     id: 2,
                //     title: 'Two',
                //     date: '2020-05-28',
                //     startTime: '14:00',
                //     endTime: '14:30',
                //     description: 'second',
                // },
    
                // {
                //     id: 3,
                //     title: 'Three',
                //     date: '2020-05-29',
                //     startTime: '15:00',
                //     endTime: '15:30',
                //     description: 'third',
                // },
    
                // {
                //     id: 4,
                //     title: 'Four',
                //     date: '2020-05-30',
                //     startTime: '12:00',
                //     endTime: '12:30',
                //     description: 'fourth',
                // },
    
    
                // {
                //     id: 5,
                //     title: 'Five',
                //     date: '2020-05-31',
                //     startTime: '17:00',
                //     endTime: '17:30',
                //     description: 'fifth',
                // },
    
                // {
                //     id: 6,
                //     title: 'Six',
                //     date: '2020-06-01',
                //     startTime: '18:00',
                //     endTime: '18:30',
                //     description: 'sixth',
                // },
            ]
        }
    }

    onDaysMove = () => {
        const currentDay = this.state.monday;
        const nextDay = new Date(
            currentDay.setDate(currentDay.getDate() + 7)
        )

        this.setState({
            monday: nextDay
        });

    };

    onDaysBack = () => {
        const currentDay = this.state.monday;
        const prevDay = new Date(
            currentDay.setDate(currentDay.getDate() - 7)
        )

        this.setState({
            monday: prevDay
        });

    };

    onCurrentDay = () => {
        const todayIsADay = getStartOfWeek(new Date())

        this.setState({
            monday: todayIsADay

        });
    };

    popupRender = () => {
        this.setState((defState) => {
            return {
                isPopupRendered: !defState.isPopupRendered
            };
        });
    };


    render() {
        return (
            <>
                <Header
                    onDaysMove={this.onDaysMove}
                    onDaysBack={this.onDaysBack}
                    onCurrentDay={this.onCurrentDay}
                    popupRender={this.popupRender}
                    monday={this.state.monday}
                />
                <Navigation
                    monday={this.state.monday}
                />
                <Calendar
                    events={this.state.events}
                />
                {this.state.isPopupRendered && (
                    <Popup
                        popupRender={this.popupRender}
                        events={this.state.events}
                    />
                )}
            </>
        );
    };
};

export default App;