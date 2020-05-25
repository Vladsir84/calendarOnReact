/* eslint-disable no-unused-vars */
import React from "react";
import moment from "moment";


const formatDate = date => moment(date).format("MMM YYYY");

const Header = ({ date, onDaysBack, onDaysMove }) => {
  
    return (
        <header className="header">
            <nav className="header-navbar">
                <button className="create-button create-event">
                    <div className="button-create-event">
                        <svg className="create-event" width="36" height="36" viewBox="0 0 36 36">
                            <path className="create-event" fill="#34A853" d="M16 16v14h4V20z"></path>
                            <path className="create-event" fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                            <path className="create-event" fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                            <path className="create-event" fill="#EA4335" d="M20 16V6h-4v14z"></path>
                            <path className="create-event" fill="none" d="M0 0h36v36H0z"></path>
                        </svg>
                    </div>
                    <span className="create-button__text create-event">Create</span>
                </button>
                <button className="today-button">
                    Today
            </button>
                <div className="arrow-button">
                    <button className="arrow-button__prev button-style" onClick={() => onDaysBack} >
                        <i className="material-icons arrow-button__size">keyboard_arrow_left</i>
                    </button>
                    <button className="arrow-button__next button-style" onClick={() => onDaysMove} >
                        <i className="material-icons arrow-button__size">keyboard_arrow_right</i>
                    </button>
                </div>
                <span className="dates">
                {formatDate(date)}
            </span>
            </nav>

        </header>
    )
}


export default Header;