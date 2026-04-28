import React from 'react';
import "../Cards/card.css";
import { Card, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { cloudinaryUrl } from '../../utils/cloudinary';

const ActivityCard = ({ val }) => {
  const imageSrc = cloudinaryUrl(val.thumbnail || val.images?.[0], 500, 300);

  const duration = val.duration || "N/A";

  // 💰 PRICE NORMALIZER
  const normalizePrice = (price) => {
    if (!price) return null;

    try {
      const obj = typeof price === "string" ? JSON.parse(price) : price;
      return typeof obj === "object" ? obj : null;
    } catch (e) {
      return null;
    }
  };

  const price = normalizePrice(val.price);

  // 💰 STARTING PRICE (ADULT-FIRST LOGIC)
  const getStartingPrice = (priceObj) => {
    if (!priceObj || typeof priceObj !== "object") return null;

    // 🔥 1. PRIORITIZE ADULT PRICE
    // 🔥 Find adult key (case-insensitive)
    const adultKey = Object.keys(priceObj).find(
      key => key.toLowerCase().includes("adult")
    );

    if (adultKey) {
      const v = priceObj[adultKey];

      if (
        v === 0 ||
        v === "0" ||
        (typeof v === "string" && v.toLowerCase().includes("free"))
      ) {
        return "free";
      }

      if (typeof v === "object" && v.min !== undefined) {
        return Number(v.min);
      }

      if (typeof v === "string" && v.includes("-")) {
        const [min] = v.split("-");
        return Number(min);
      }

      if (!isNaN(Number(v))) {
        return Number(v);
      }
    }

    // 🔁 2. FALLBACK: lowest available price
    const values = Object.values(priceObj)
      .flatMap((v) => {
        if (v === null || v === undefined) return [];

        if (
          v === 0 ||
          v === "0" ||
          (typeof v === "string" && v.toLowerCase().includes("free"))
        ) {
          return ["free"];
        }

        if (typeof v === "object" && v.min !== undefined) {
          return [Number(v.min)];
        }

        if (typeof v === "string" && v.includes("-")) {
          const [min] = v.split("-");
          return [Number(min)];
        }

        if (!isNaN(Number(v))) {
          return [Number(v)];
        }

        return [];
      });

    if (values.includes("free")) return "free";

    const numericValues = values.filter(v => typeof v === "number");

    if (!numericValues.length) return null;

    return Math.min(...numericValues);
  };

  const startingPrice = getStartingPrice(price);
  const currencySymbol = val.currency === "JPY" ? "¥" : "$";

  return (
    <Card className="rounded-2 shadow-sm popular-card">
      <Card.Img
        variant="top"
        src={imageSrc}
        className="img-fluid"
        alt={val.title || "activity image"}
      />

      <Card.Body>
        <Card.Text>
          <i className="bi bi-geo-alt"></i>{" "}
          <span className="text">{val.location || "Unknown"}</span>
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
          <p className="review-section">
            <span><i className="bi bi-star-fill me-1"></i></span>
            <span>{val.rating}</span>
            <span> ({(val.reviews || 0).toLocaleString()} reviews)</span>
          </p>
        )}

        {/* 💰 PRICE SECTION */}
        <div className="card-prices">
          {startingPrice === "free" ? (
            <p className="mb-0"><b>Free</b></p>
          ) : typeof startingPrice === "number" ? (
            <p className="mb-0">
              <span className="text-muted">Starting at </span>
              <b>
                {currencySymbol}
                {startingPrice.toLocaleString()}
              </b>
            </p>
          ) : (
            <p className="text-muted">No pricing available</p>
          )}
        </div>
      </Card.Body>

      <Card.Footer className="py-3 mt-1">
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