import React from "react";

const ServiceCard = ({ image, icon, title, description, alt, iconAlt }) => {
  return (
    <div className="ourservice-inner-card-data">
      <img src={image} alt={alt} />
      <div className="serviceinner-card-details">
        <img className="invest-grey-round" src={icon} alt={iconAlt} />
        <h3>{title}</h3>
        <p title={description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
