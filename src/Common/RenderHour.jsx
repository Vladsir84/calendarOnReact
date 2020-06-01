/* eslint-disable no-unused-vars */
import React from 'react';
import Event from '../PopupAndEvent/Event.jsx';

const RenderHour = () => {
   
return (
        <div
            key={Math.random()}
            className="emptyCell"
        >
             <Event />
        </div>
    );
  };

export default RenderHour;