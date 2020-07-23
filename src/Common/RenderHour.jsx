/* eslint-disable no-unused-vars */
import React from 'react';
import Event from '../PopupAndEvent/Event.jsx';
import RedLine from '../PopupAndEvent/RedLine.jsx';

const RenderHour = ({ handleDeleteEvent, event, hour, date }) => {
	// const redLine = date.toDateString() === new Date().toDateString && hour === new Date().getHours();
	return (
		<div key={Math.random()} className="emptyCell">
      
			{/* {redLine && <RedLine key= {Math.random()} />} */} 
			{event && <Event event={event} handleDeleteEvent={handleDeleteEvent} id={event.id} />}

		</div>
	);
};

export default RenderHour;
