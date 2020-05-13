import React from 'react';

const Navigation = () => {
    
    return (
        <nav className="days-navigation">
        <div className="week">
            <div className="day">
                <div className="day-name">Sun</div>
                <div className="day-number">25</div>
            </div>
            <div className="day">
                <div className="day-name">Mon</div>
                <div className="day-number">26</div>
            </div>
            <div className="day">
                <div className="day-name">Tue</div>
                <div className="day-number">27</div>
            </div>
            <div className="day">
                <div className="day-name">We</div>
                <div className="day-number">28</div>
            </div>
            <div className="day">
                <div className="day-name">Th</div>
                <div className="day-number">29</div>
            </div>
            <div className="day">
                <div className="day-name">Fr</div>
                <div className="day-number">30</div>
            </div>
            <div className="day">
                <div className="day-name">Sat</div>
                <div className="day-number">1</div>
            </div>
        </div>
    </nav>
    
    )
}

export default Navigation;