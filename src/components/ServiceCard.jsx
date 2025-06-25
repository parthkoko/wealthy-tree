// import React from "react";

// import investsevice from "../assets/images/investsevice.png";

// const ServiceCard = ({ image, icon, title, description, alt, iconAlt }) => {
//   return (
//     <div className="ourservice-inner-card-data">
//       <img className="" src={image} alt={alt} />
//       <div className="serviceinner-card-details">
//         <img className="invest-grey-round " src={icon} alt={iconAlt} />
//         <h3>{title}</h3>
//         <p title={description}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;




import React from "react";

const ServiceCard = React.memo(
  ({ image, icon, title, description, alt, iconAlt }) => {
    return (
      <div className="ourservice-inner-card-data">
        <img src={image} alt={alt} loading="lazy" />
        <div className="serviceinner-card-details">
          <img
            className="invest-grey-round"
            src={icon}
            alt={iconAlt}
            loading="lazy"
          />
          <h3>{title}</h3>
          <p title={description}>{description}</p>
        </div>
      </div>
    );
  }
);

export default ServiceCard;