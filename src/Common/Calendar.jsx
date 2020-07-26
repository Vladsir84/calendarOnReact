/* eslint-disable no-unused-vars */
import React from "react";
import Day from "./Day.jsx";
import Sidebar from "./Sidebar.jsx"
import SidebarLine from "./SidebarLine.jsx";

const Calendar = ({ events, onEventDelete, monday }) => {

return (
			<section className='main'>
				<Sidebar />
				<SidebarLine />
				<Day
					monday={monday}
					events={events}
					onEventDelete={onEventDelete}
				/>
			</section>
		);
}

export default Calendar;
