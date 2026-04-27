import React from "react";
import "../Cards/card.css";
import { Card } from "react-bootstrap";
import { cloudinaryUrl } from "../../utils/cloudinary";

const Cards = ({ destination }) => {
  return (
    <div className="img-box">
      <Card>
        <Card.Img
          variant="top"
          src={cloudinaryUrl(destination.image, 500, 250)}
          className="img-fluid"
          alt={destination.name}
        />
          <Card.Title>{destination.name}</Card.Title>
      </Card>
    </div>
  );
};

export default Cards;