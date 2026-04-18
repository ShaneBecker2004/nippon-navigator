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

  const getStartingPrice = (priceObj) => {
  if (!priceObj || typeof priceObj !== "object") return null;

  const values = Object.values(priceObj)
    .map(v => {
      if (typeof v === "number") return v;

      if (typeof v === "string" && v.includes("-")) {
        const [min] = v.split("-");
        return Number(min);
      }

      if (typeof v === "object" && v.min !== undefined) {
        return Number(v.min);
      }

      return Number(v);
    })
    .filter(v => !isNaN(v));

  if (!values.length) return null;

  return Math.min(...values);
};

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
            to={`/activity/${val.slug || val.id}`}
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
            (() => {
              const currencySymbol = val.currency === "JPY" ? "¥" : "$";

              // 🧠 normalize all price values into usable numbers
              const values = Object.values(price)
                .flatMap((v) => {
                  if (v === null || v === undefined) return [];

                  // FREE
                  if (
                    v === 0 ||
                    v === "0" ||
                    (typeof v === "string" && v.toLowerCase().includes("free"))
                  ) {
                    return ["free"];
                  }

                  // RANGE OBJECT {min, max}
                  if (typeof v === "object" && v.min !== undefined && v.max !== undefined) {
                    return [Number(v.min)];
                  }

                  // RANGE STRING "1000-1500"
                  if (typeof v === "string" && v.includes("-")) {
                    const [min] = v.split("-");
                    return [Number(min)];
                  }

                  // NORMAL NUMBER
                  if (!isNaN(Number(v))) {
                    return [Number(v)];
                  }

                  return [];
                });

              // 🟢 FREE ONLY CASE
              if (values.includes("free")) {
                return <p className="mb-0"><b>Free</b></p>;
              }

              // 🟡 GET STARTING PRICE
              const numericValues = values.filter(v => typeof v === "number");
              const startingPrice = numericValues.length
                ? Math.min(...numericValues)
                : null;

              return startingPrice ? (
                <p className="mb-0">
                  <span className="text-muted">Starting at </span>
                  <b>
                    {currencySymbol}
                    {startingPrice.toLocaleString()}
                  </b>
                </p>
              ) : (
                <p className="text-muted">No pricing available</p>
              );
            })()
          ) : (
            <p className="text-muted">No pricing available</p>
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