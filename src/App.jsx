/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './HeaderComponents/Header.jsx';
import Navigation from './HeaderComponents/Navigation.jsx';
import { getStartOfWeek } from './FunctionsAndUtils/TimeUtils.jsx';
import Popup from './PopupAndEvent/Popup.jsx';
import Calendar from './Common/Calendar.jsx';
import { createEvent, deleteEvent, fetchEvents } from './FunctionsAndUtils/Gateways.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monday: getStartOfWeek(new Date()),
			isPopupRendered: false,
			events: [],
		};
	}

	onDaysMove = () => {
		const currentDay = this.state.monday;
		const nextDay = new Date(currentDay.setDate(currentDay.getDate() + 7));

		this.setState({
			monday: nextDay,
		});
	};

	componentDidMount() {
		this.onCurrentDay();
		this.fetchEvent();
	}

	onDaysBack = () => {
		const currentDay = this.state.monday;
		const prevDay = new Date(currentDay.setDate(currentDay.getDate() - 7));

		this.setState({
			monday: prevDay,
		});
	};

	onCurrentDay = () => {
		const todayIsADay = getStartOfWeek(new Date());

		this.setState({
			monday: todayIsADay,
		});
	};

	popupRender = () => {
		this.setState((defState) => {
			return {
				isPopupRendered: !defState.isPopupRendered,
			};
		});
	};

	fetchEvent = () => {
		 fetchEvents().then((eventsList) => {
			this.setState({
				events: eventsList,
			});
		});
	};

	handleCreateEvent = (event) => {
		const newEvent = event;
		const startTime = newEvent.startTime.split(':');
		newEvent.startDate = new Date(new Date(newEvent.startDate).setHours(+startTime[0], +startTime[1]));

		const endTime = newEvent.endTime.split(':');
		newEvent.endDate = new Date(new Date(newEvent.endDate).setHours(+endTime[0], +endTime[1]));

        if (newEvent.title === ''){
            newEvent.title = 'Add title';
        }
        
        createEvent(newEvent).then((data) => {
			const { events } = this.state;
			events.push(data);
			return this.setState({ events });
		});
	};

	onEventDelete = (id) => {
		deleteEvent(id).then(() => this.fetchEvent());
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
				<Navigation monday={this.state.monday} />
				<Calendar events={this.state.events} />
				{this.state.isPopupRendered && (
					<Popup
						popupRender={this.popupRender}
						handleCreateEvent={this.handleCreateEvent}
						onEventDelete={this.onEventDelete}
						fetchEvent={this.fetchEvent}
						events={this.state.events}
					/>
				)}
			</>
		);
	}
}

export default App;
