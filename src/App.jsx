/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './HeaderComponents/Header.jsx';
import Navigation from './HeaderComponents/Navigation.jsx';
import Popup from './PopupAndEvent/Popup.jsx';
import Calendar from './Common/Calendar.jsx';
import { getStartOfWeek } from './GatewaysAndUtils/TimeUtils.jsx';
import { createEvent, deleteEvent, fetchEvents } from './GatewaysAndUtils/Gateways.jsx';

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
	
	componentDidMount() {
		this.onCurrentDay();
		this.fetchEvent();
	}
	
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

	
	handleCreateEvent = async (newEventData) => {
		const newEvent = await createEvent(newEventData)
		this.fetchEvent();
		console.log(newEvent);
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
				<Calendar
					events={this.state.events}
					onEventDelete={this.onEventDelete}
					monday={this.state.monday}
				/>

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
