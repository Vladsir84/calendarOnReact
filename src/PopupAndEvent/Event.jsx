/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Popup from './Popup.jsx';
// import { deleteEvent } from '../FunctionsAndUtils/Gateways.jsx';

class Event extends Component {
	state = {
		deleteEvent: false,
	};

	showPopup = () => {
		const { deleteEvent } = this.state;
		this.setState({ deleteEvent: !deleteEvent });
	};

	render() {
		const { event, id, onEventDelete } = this.props;
		const { deleteEvent } = this.state;
		const height = (new Date(event.endDate) - new Date(event.startDate)) / 1000 / 60;
		const marginTop = new Date(event.startDate).getMinutes();
		const style = {
			height: `${height}px`,
			marginTop: `${marginTop}px`,
		};

		const hourStart = new Date(event.startDate).getHours();
		const minuteStart =
			new Date(event.startDate).getMinutes() < 10
				? `${new Date(event.startDate).getMinutes()}0`
				: new Date(event.startDate).getMinutes();

		const hourEnd = new Date(event.endDate).getHours();
		const minuteEnd =
			new Date(event.endDate).getMinutes() < 10
				? `${new Date(event.endDate).getMinutes()}0`
				: new Date(event.endDate).getMinutes();

		return (
			<div id={id} className="active_event" onClick={(e) => this.showPopup(e)} style={style}>
				{deleteEvent && <Popup eventId={id} onEventDelete={onEventDelete} />}

				{`${event.title}
				 ${hourStart}:${minuteStart}-${hourEnd}:${minuteEnd}`}
			</div>
		);
	}
}

export default Event;
