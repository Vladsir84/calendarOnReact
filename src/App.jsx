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

    render() {
        return (
            <>
                <Header />
                <Navigation 
                monday={this.state.monday}
                />
                <RenderSidebar />
            </>
        )
    }
}

export default App