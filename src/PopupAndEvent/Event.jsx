/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Popup from './Popup.jsx';
// import { deleteEvent } from '../FunctionsAndUtils/Gateways.jsx';

class Event extends Component {
	state = {
		deleteEvent: false,

		// redLine: new Date(),
		// showRedLine: false,
	};

	showPopup = () => {
		const { deleteEvent } = this.state;
		this.setState({ deleteEvent: !deleteEvent });
	};

	render() {
		const { events, id, onEventDelete } = this.props;
		const height = (new Date(events.endTime) - new Date(events.startTime)) / 1000 / 60;
		const marginTop = new Date(events.startTime).getMinutes();
		const style = {
			height: `${height}px`,
			marginTop: `${marginTop}px`,
		};

		const hourStart = events.map((event) => new Date(event.startTime).getHours());
		const minuteStart = events.map((event) =>
			new Date(event.startTime).getMinutes() < 10
				? `${new Date(event.startTime).getMinutes()}0`
				: new Date(event.startTime).getMinutes()
		);

		const hourEnd = events.map((event) => new Date(event.endTime).getHours());
		const minuteEnd = events.map((event) =>
			new Date(event.endTime).getMinutes() < 10
				? `${new Date(event.endTime).getMinutes()}0`
				: new Date(event.endTime).getMinutes()
		);

		return (
			<div id={id} className="active_event" onClick={(e) => this.showPopup(e)} style={style}>
				{this.state.deleteEvent && <Popup eventId={id} onEventDelete={onEventDelete} />}
				{events.map(
					(event) =>
						`${event.title}
				 ${hourStart}:${minuteStart}-${hourEnd}:${minuteEnd}`
					// ${event.startTime}:${event.endTime}`
				)}
			</div>
		);
	}
}

export default Event;
