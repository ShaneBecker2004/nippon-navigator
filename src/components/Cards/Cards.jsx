import React from "react";
import "../Cards/card.css";
import { Card } from "react-bootstrap";

const Cards = ({ destination }) => {
  return (
    <div className="img-box">
      <Card>
        <Card.Img
          variant="top"
          src={destination.image || "/images/default.jpg"}
          className="img-fluid"
          alt={destination.name}
        />
          <Card.Title>{destination.name}</Card.Title>
      </Card>
    </div>
  );
};

export default Cards;