/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from "react";
import Day from "./Day.jsx";
import Sidebar from "./Sidebar.jsx"
import SidebarLine from "./SidebarLine.jsx";
// import { filteredByDate , filteredByTime } from '../FunctionsAndUtils/TimeUtils.jsx'

const Calendar = ({ events, onEventDelete }) => {

return (
			<section className='main'>
				<Sidebar />
				<SidebarLine />
				<Day
					events={events}
					onEventDelete={onEventDelete}
				/>
			</section>
		);
}

export default Calendar;
