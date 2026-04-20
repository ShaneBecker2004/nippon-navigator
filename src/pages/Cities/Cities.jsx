import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import cityimg from "../../assets/images/breadcrumb/shibuya-night.avif";
import "../Explore/explore.css"; // optional for fade-in CSS

const API = process.env.REACT_APP_API_URL;

const Cities = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch(`${API}/api/destinations`);
        const data = await res.json();

        // Use image path from database directly, fallback if missing
        const updatedData = data.map((dest) => ({
          ...dest,
          image: dest.image || "/images/default.jpg",
        }));

        setDestinations(updatedData);
      } catch (err) {
        console.error("Error fetching destinations:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

    if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs title="Cities" pagename="Cities" bgImage={cityimg} />

      <section className="py-5">
        <Container>
          <div className="cities-text">
            <h1>Select a City And Find Your Activities:</h1>
          </div>

          <Row className="fade-in">
            {destinations.length > 0 ? (
              destinations.map((destination) => (
                <Col md="3" sm="6" key={destination.id} className="pb-4">
                  <Link
                    to={`/explore?city=${destination.slug}`}
                    className="activity-card-link"
                  >
                    <Cards destination={destination} />
                  </Link>
                </Col>
              ))
            ) : (
              <p className="text-center w-100 mt-4">
                No destinations found.
              </p>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cities;