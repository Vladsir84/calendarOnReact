/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { Component } from 'react';
import Popup from './Popup.jsx';
import { generateNumbersRange } from '../FunctionsAndUtils/TimeUtils.jsx';
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

			const { events, id, onEventDelete } = this.props;
			const { deleteEvent } = this.state;
			const height = events.map((event) => (new Date(event.endDate) - new Date(event.startDate)) / 1000 / 60);
			const marginTop = events.map((event) => new Date(event.startDate).getMinutes());
			const style = {
				height: `${height}px`,
				marginTop: `${marginTop}px`,
			};

			const hourStart = events.map((event) =>new Date(event.startDate).getHours());
			const minuteStart = events.map((event) =>
				new Date(event.startDate).getMinutes() < 10
					? `${new Date(event.startDate).getMinutes()}0`
					: new Date(event.startDate).getMinutes());

			const hourEnd = events.map((event) => new Date(event.endDate).getHours());
			const minuteEnd = events.map((event) =>
				new Date(event.endDate).getMinutes() < 10
					? `${new Date(event.endDate).getMinutes()}0`
					: new Date(event.endDate).getMinutes());

			return (
				<div id={id} className="active_event" onClick={(e) => this.showPopup(e)} style={style}>
					{deleteEvent && <Popup eventId={id} onEventDelete={onEventDelete} />}

					{`${events.title}
					 ${hourStart}:${minuteStart}-${hourEnd}:${minuteEnd}`}
				</div>
			);
		}
	}

	export default Event;
