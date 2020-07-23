/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { createNewEvent } from '../FunctionsAndUtils/TimeUtils.jsx';

class Popup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Add title',
			color: '#4183f1',
			startDate: '',
			endDate: '',
			startTime: '',
			endTime: '',
			description: '',
		};
	}

	componentDidMount() {
		const createPopup = createNewEvent();
		this.setState({
			...createPopup,
		});
	}

	onInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		const { handleCreateEvent, popupRender } = this.props;
		e.preventDefault();
		const newEvent = this.state;
		handleCreateEvent(newEvent);
		popupRender();
	};

	render() {
		const { title, color, startDate, endDate, startTime, endTime, description } = this.state;
		const { eventId, onEventDelete } = this.props;

		return (
			<section className='popup' onSubmit={this.handleSubmit}>
				<form className='popup__form'>
					<button className='close material-icons'>close</button>

					<input
						name='title'
						className='input__name'
						type='text'
						placeholder='Add title'
						value={title}
						onChange={this.onInput}
					/>

					<div className='color-picker'>
						<label className='color-picker_label'>
							<span className='color-picker_label-text'>Select a color</span>
							<input
								className='event__color-picker'
								type='color'
								name='color'
								value={color}
								onChange={this.onInput}
							/>
						</label>
					</div>

					<div className='date-block '>
						<i className='Tiny material-icons'>access_time</i>
						<input
							className='start-date input-style'
							type='date'
							name='startDate'
							value={startDate}
							onChange={this.onInput}
						/>

						<input
							type='time'
							className='start-time time-list input-style '
							name='startTime'
							value={startTime}
							onChange={this.onInput}
						/>

						<input
							type='time'
							className='end-time time-list input-style '
							name='endTime'
							value={endTime}
							onChange={this.onInput}
						/>

						<input
							className='end-date input-style'
							type='date'
							name='endDate'
							onChange={this.onInput}
							value={endDate}
						/>
					</div>

					<div className='description '>
						<i className='Tiny material-icons '>format_align_left</i>
						<textarea
							className='description-input '
							name='description'
							cols='42 '
							rows='4 '
							placeholder='Add description'
							value={description}
							onChange={this.onInput}
						></textarea>
					</div>

					<div className='control '>
						<button className='delete-event ' onClick={() => onEventDelete(eventId)}>
							<i className='Tiny material-icons material-icons-delete'>delete</i>
						</button>
						<button type='submit' className='submit-button '>
							Save
						</button>
					</div>
				</form>
			</section>
		);
	}
}

export default Popup;
