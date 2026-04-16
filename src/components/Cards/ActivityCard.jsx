import React from 'react';
import "../Cards/card.css";
import { Card, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ActivityCard = ({ val }) => {
  const imageSrc =
    val.thumbnail || (val.images && val.images.length > 0 ? val.images[0] : "/images/default.jpg");

  const categories = Array.isArray(val.category)
    ? val.category
    : val.category
    ? [val.category]
    : [];

  const duration = val.duration || "N/A";

  // 🧠 FORMAT KEY (for labels like "adult_price" → "Adult Price")
  const formatKey = (key) =>
    key
      .replace(/_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // 💰 SAFE PRICE NORMALIZER (handles string OR object)
  const normalizePrice = (price) => {
    if (!price) return null;

    const obj = typeof price === "string" ? JSON.parse(price) : price;

    if (typeof obj !== "object") return null;

    return obj;
  };

  const price = normalizePrice(val.price);

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
            to={`/explore-details/${val.slug || val.id}`}
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

        {/* Categories */}
        <div className="mb-2">
          {categories.map((cat, index) => {
            const formatted = cat
              .replace(/_/g, " ") // remove underscores
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            const className = formatted.replace(/\s/g, ""); // "Theme Park" → "ThemePark"

            return (
              <span
                key={index}
                className={`${className} badge me-1`}
              >
                {formatted}
              </span>
            );
          })}
        </div>

        {/* 💰 PRICE SECTION (FIXED) */}
        <div className="card-prices">
          {price && Object.keys(price).length > 0 ? (
            Object.entries(price).map(([key, value]) => {
              const label = formatKey(key);
              const currencySymbol = val.currency === "JPY" ? "¥" : "$";

              // 🟢 FREE
              if (
                value === 0 ||
                value === "0" ||
                (typeof value === "string" && value.toLowerCase().includes("free"))
              ) {
                return (
                  <p key={key} className="mb-0">
                    <b>{label}:</b> Free
                  </p>
                );
              }

              // 🟡 RANGE OBJECT {min, max}
              if (typeof value === "object" && value.min !== undefined && value.max !== undefined) {
                return (
                  <p key={key} className="mb-0">
                    <b>{label}:</b>{" "}
                    {currencySymbol}
                    {Number(value.min).toLocaleString()} - {currencySymbol}
                    {Number(value.max).toLocaleString()}
                  </p>
                );
              }

              // 🔵 RANGE STRING "1000-1500"
              if (typeof value === "string" && value.includes("-")) {
                const [min, max] = value.split("-");

                return (
                  <p key={key} className="mb-0">
                    <b>{label}:</b>{" "}
                    {currencySymbol}
                    {Number(min).toLocaleString()} - {currencySymbol}
                    {Number(max).toLocaleString()}
                  </p>
                );
              }

              // 🟣 NORMAL NUMBER
              return (
                <p key={key} className="mb-0">
                  <b>{label}:</b>{" "}
                  {currencySymbol}
                  {Number(value).toLocaleString()}
                </p>
              );
            })
          ) : (
            <p>No pricing available</p>
          )}
        </div>
      </Card.Body>

      <Card.Footer className='py-3 mt-1'>
        <Stack direction="horizontal" className="justify-content-between">
          <p className="mb-0">
            <i className="bi bi-clock"></i> {duration}
          </p>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default ActivityCard;