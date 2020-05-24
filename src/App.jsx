/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './Header.jsx'
import Navigation from './Navigation.jsx';
import RenderSidebar from './RenderSidebar.jsx';
import { getStartOfWeek } from './TimeUtils.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monday: getStartOfWeek(new Date()),
            
        }
    }

    onDayMove = () => {
        const currentDay = this.state.monday;
        const nextDay = new Date(
            currentDay.setState(currentDay.getDate() + 7)
        )
       
        this.state({
            monday: nextDay
        })
    
    }
    
    onDayBack = () => {
        const currentDay = this.state.monday;
        const prevDay = new Date(
            currentDay.setState(currentDay.getDate() - 7)
        )
       
        this.state({
            monday: prevDay
        })
    
    }
    
    
    
    render() {
        return (
            <>
                <Header 
                onDayMove = {this.onDayMove}
                onDayBack = {this.onDayBack}
                />
                <Navigation 
                monday={this.state.monday}
                onDayMove = {this.onDayMove}
                onDayBack = {this.onDayBack}
               />
                <RenderSidebar />
            </>
        )
    }
}

export default App