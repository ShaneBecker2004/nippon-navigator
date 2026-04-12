import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Col, Container, Row, Offcanvas } from 'react-bootstrap';
import ActivityCard from '../../components/Cards/ActivityCard';
import Filters from './Filters';
import Sidebar from '../Sidebar/Sidebar';
import Recommended from '../../components/Recommended/Recommended';
import "../Explore/explore.css";
import exploreimg from "../../assets/images/breadcrumb/japan-city.webp";

const Explore = () => {
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch activities from API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/activities");
        const data = await res.json();

        // Map fields to match ActivityCard
        const mappedData = data.map(act => ({
          ...act,
          category: act.category || [],
          highlights: act.highlights || [],
          images: act.images || [],
          details: act.details || {},
          reviews: act.reviews || 0,
        }));

        setActivities(mappedData);
      } catch (err) {
        console.error("Failed to fetch activities:", err);
      }
    };

    fetchActivities();
  }, []);

  // Filter activities based on search
  const filteredActivities = activities.filter(activity =>
    activity.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Breadcrumbs title="Explore" pagename="Explore" bgImage={exploreimg} />

      <section className='py-5 explore_list'>
        <Container>
          <Row>
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-search me-2" style={{ fontSize: "1.2rem", color: "#555" }}></i>
              <input
                type="text"
                placeholder="Search activities..."
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Recommended />

            {/* LEFT SIDE (Filters) */}
            <Col xl='3' lg='4' md='5' sm='6'>
              {/* Mobile filter button */}
              <div className='d-lg-none d-block' onClick={handleShow}>
                <button className='filterBtn primaryBtn mb-4'>
                  <i className='bi bi-funnel'></i> Filters
                </button>
              </div>

              {/* Desktop filters */}
              <div className='filters d-lg-block d-none'>
                <Sidebar />
              </div>
            </Col>

            {/* RIGHT SIDE (Search + Cards) */}
            <Col xl='9' lg='8' md='12' sm='12'>
              <Row>
                {filteredActivities.length === 0 ? (
                  <p>No activities found.</p>
                ) : (
                  filteredActivities.map((val, inx) => (
                    <Col xl={4} lg={6} md={6} sm={6} className='mb-5' key={inx}>
                      <ActivityCard val={val} />
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile Filters Offcanvas */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Recommended />
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Explore;