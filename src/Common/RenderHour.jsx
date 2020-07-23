/* eslint-disable no-unused-vars */
import React from 'react';
import Event from '../PopupAndEvent/Event.jsx';

const RenderHour = ({ handleDeleteEvent, event }) => {
	return (
		<div key={Math.random()} className="emptyCell">
			{event && <Event event={event} handleDeleteEvent={handleDeleteEvent} id={event.id} />}
		</div>
	);
};

export default RenderHour;
