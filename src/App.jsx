/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './HeaderComponents/Header.jsx'
import Navigation from './HeaderComponents/Navigation.jsx';
import RenderSidebar from './Common/RenderSidebar.jsx';
import { getStartOfWeek } from './FunctionsAndUtils/TimeUtils.jsx';
import Popup from './PopupAndEvent/Popup.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monday: getStartOfWeek(new Date()),
            isPopupRendered: false,
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
                <RenderSidebar />
                {this.state.isPopupRendered && (
                    <Popup
                        popupRender={this.popupRender}
                    />
                )}
            </>
        );
    };
};

export default App;