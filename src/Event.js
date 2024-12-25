import React from 'react';
import './Event.css'; 
import mainImage from './assets/Bitotsav.jpg'

const EventCard = () => {
  return (
    <div className="event-container">
      <h2 className="event-title">EVENTS</h2>
      <div className="event-image-placeholder">
        <img 
          src={mainImage}
          alt="Event Placeholder" 
          style={{width:"100%",height:"25rem",borderRadius:"0.5rem",boxShadow:"0rem 0rem 1.25rem rgba(0,0,0,0.5)"}}
          className="event-image-content"
        />
      </div>
      <h3 className="event-subtitle">Flagship event</h3>
      <p className="event-description">
        This will be the description of the flagship event to be filled immediately as soon as the event details are provided.This will be the description of the flagship event to be filled immediately as soon as the event details are provided.This will be the description of the flagship event to be filled immediately as soon as the event details are provided.
      </p>
    </div>
  );
};

export default EventCard;
