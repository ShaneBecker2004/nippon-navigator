import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";
import cityimg from "../../assets/images/breadcrumb/shibuya-night.avif";
import "../Explore/explore.css"; // optional for fade-in CSS

const Cities = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("http://localhost:5001/api/destinations");
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

  // Show nothing while loading
  if (loading) return null;

  return (
    <>
      <Breadcrumbs title="Cities" pagename="Cities" bgImage={cityimg} />

      <section className="py-5">
        <Container>
          <Row className="fade-in"> {/* fade-in effect */}
            {destinations.map((destination) => (
              <Col md="3" sm="6" key={destination.id} className="pb-4">
                <Cards destination={destination} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cities;