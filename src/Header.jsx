import React from 'react';

const Header = () => {
    
    return (
        <header class="header">
        <nav class="header-navbar">
            <button class="create-button create-event">
                <div class="button-create-event">
                    <svg class="create-event" width="36" height="36" viewBox="0 0 36 36">
                        <path class="create-event" fill="#34A853" d="M16 16v14h4V20z"></path>
                        <path class="create-event" fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                        <path class="create-event" fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                        <path class="create-event" fill="#EA4335" d="M20 16V6h-4v14z"></path>
                        <path class="create-event" fill="none" d="M0 0h36v36H0z"></path>
                    </svg>
                </div>
                <span class="create-button__text create-event">Create</span>
            </button>
            <button class="today-button">
                Today
            </button>
            <div class="arrow-button">
                <button class="arrow-button__prev button-style">
                    <i class="material-icons arrow-button__size">keyboard_arrow_left</i>
                </button>
                <button class="arrow-button__next button-style">
                    <i class="material-icons arrow-button__size ">keyboard_arrow_right</i>
                </button>
            </div>
            <span class="dates">
                November - December 2019
            </span>
        </nav>

    </header>
    )
}


export default Header;