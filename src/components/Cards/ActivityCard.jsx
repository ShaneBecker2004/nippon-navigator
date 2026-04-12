import React from 'react';
import "../Cards/card.css";
import { Card, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ActivityCard = ({ val }) => {
  // Use thumbnail first, fallback to first image, then default
  const imageSrc =
    val.thumbnail || (val.images && val.images.length > 0 ? val.images[0] : "/images/default.jpg");

  // Ensure category is an array
  const categories = Array.isArray(val.category) ? val.category : [];

  // Duration and price
  const duration = val.duration || "N/A";
  const price = val.price !== null && val.price !== undefined ? `$${val.price.toFixed(2)}` : "N/A";

  return (
    <Card className="rounded-2 shadow-sm popular-card">
      <Card.Img
        variant='top'
        src={imageSrc}
        className='img-fluid'
        alt={val.title || "activity image"}
      />

      <Card.Body>
        <Card.Text>
          <i className="bi bi-geo-alt"></i>{" "}
          <span className='text'>{val.location || "Unknown"}</span>
        </Card.Text>

        <Card.Title>
          <NavLink
            className="body-text text-dark text-decoration-none"
            to={`/explore-details/${val.id}`}
          >
            {val.title}
          </NavLink>
        </Card.Title>

        {val.rating && (
          <p className='review'>
            <span><i className="bi bi-star-fill me-1"></i></span>
            <span>{val.rating}</span>
            <span> ({val.reviews || 0} reviews)</span>
          </p>
        )}

        <div className="mb-2">
          {categories.map((cat, index) => (
            <span key={index} className={cat.replace(/ .*/, "") + " badge me-1"}>
              {cat}
            </span>
          ))}
        </div>
      </Card.Body>

      <Card.Footer className='py-4'>
        <Stack direction="horizontal" className="justify-content-between mt-3">
          <p>From <b>{price}</b></p>
          <p><i className="bi bi-clock"></i> {duration}</p>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default ActivityCard;