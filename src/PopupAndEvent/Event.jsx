/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import moment from 'moment';
import Popup from './Popup.jsx';
import RedLine from './RedLine.jsx';
import { generateNumbersRange } from '../GatewaysAndUtils/TimeUtils.jsx';

class Event extends Component {
	state = {
		eventDelete: false,
		redlineShow: false,
		redLine: new Date(),
		minutes: 0,
	};

	getDayWithEvents = (event, dayDate) => {
		const formatDate = moment(dayDate).format("YYYY-MM-DD");
		const filterEvent = event.filter(
			(eventElem) => eventElem.startDate === formatDate
		);
		const hoursArray = generateNumbersRange(0, 23).map((num) => {
			if (num - 10 < 0) {
				return {
					hours: `0${num}:00`,
					events: filterEvent.filter(
						(eventElem) =>
							eventElem.startTime.substr(0, 2) === `0${num}`
					),
				};
			}
			return {
				hours: `${num}:00`,
				events: filterEvent.filter(
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

	componentDidMount() {
		this.redLineCondition();
		this.getTime();
		setInterval(() => {
			this.getTime();
		}, 60000);
	}

	redLineCondition = () => {
		if (
			moment(this.props.day).format("YYYY-MM-DD") ===
			moment(this.state.redLine).format("YYYY-MM-DD")
		) {
			this.setState({
				redlineShow: true,
			});
		}
	};

	getTime = () => {
		const currentDate = new Date();
		const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
		const time = currentDate - currentDay;

		if (
			moment(this.props.day).format("YYYY-MM-DD") ===
			moment(this.state.redLine).format("YYYY-MM-DD")
		) {
			this.setState({
				minutes: Math.round(time / 60000),
			});
		}
	};
	
	render() {
		
		const fullHoursArray = this.getDayWithEvents(
			this.props.events,
			this.props.day
			);
			
			const { onEventDelete } = this.props
			const height = this.props.events.map((event) => (new Date(event.endTime) - new Date(event.startTime)) / 1000 / 60);
		
		return (
			<>
				{this.state.redlineShow ? <RedLine style={{ top: `${this.state.minutes}px` }} /> : ''}
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
									  style={{ height: `${height}px` }}
									>
										{`${event.title} 
                     ${event.startTime} ${event.endTime}`}
										{this.state.eventDelete ?
											<Popup
												eventDelete={this.state.eventDelete}
												id={event.id}
												onEventDelete={onEventDelete}
											/>: ''}
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