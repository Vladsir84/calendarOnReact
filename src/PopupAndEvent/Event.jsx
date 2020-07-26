/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import moment from 'moment';
import Popup from './Popup.jsx';
import { generateNumbersRange } from '../FunctionsAndUtils/TimeUtils.jsx';


class Event extends Component {
	state = {
		eventDelete: false,
	};

	getHoursWithEventsArray = (event, dayDate) => {
		const formatDate = moment(dayDate).format("YYYY-MM-DD");
		const filterEvents = event.filter(
			(eventElem) => eventElem.startDate === formatDate
		);
		const hoursArray = generateNumbersRange(0, 23).map((num) => {
			if (num - 10 < 0) {
				return {
					hours: `0${num}:00`,
					events: filterEvents.filter(
						(eventElem) =>
						eventElem.startTime.substr(0, 2) === `0${num}`
					),
				};
			}
			return {
				hours: `${num}:00`,
				events: filterEvents.filter(
					(eventElem) =>
					eventElem.startTime.substr(0, 2) === num + ""
				),
			};
		});

		return hoursArray;
	};

	showPopupEvent = () => {
		this.setState({ eventDelete: !this.state.eventDelete });
	};


	render() {

		const fullHoursArray = this.getHoursWithEventsArray(
			this.props.events,
			this.props.day
		);
		
		const { onEventDelete } = this.props

		return (
			<>
				{fullHoursArray.map((day) => {
					return (
						<div className="calendar-hour"
							key={`${day} ${day.hours}`}>
							{day.events.map((event) => {
								return (
									<div
										key={event.id}
										className="active_event"
										onClick={this.showPopupEvent}
									>
										{`${event.title} 
                     ${event.startTime} ${event.endTime}`}
										{this.state.eventDelete ? (
											<Popup
												eventDelete={this.state.eventDelete}
												id={event.id}
												onEventDelete={onEventDelete}
											/>
										) : (
												""
											)}
									</div>
								);
							})}
						</div>
					);
				})}
			</>
		);
	}
}

export default Event;


