import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Col, Container, Row, Offcanvas } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { socket } from "../../socket";
import ActivityCard from '../../components/Cards/ActivityCard';
import Sidebar from '../Sidebar/Sidebar';
import Recommended from '../../components/Recommended/Recommended';
import "../Explore/explore.css";
import exploreimg from "../../assets/images/breadcrumb/japan-city.webp";

const API = process.env.REACT_APP_API_URL;

const Explore = () => {
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getActivityPrice = (price) => {
    if (!price) return 0;

    const parsed = typeof price === "string" ? JSON.parse(price) : price;

    if (typeof parsed === "object") {
      const first = Object.values(parsed)[0];

      if (typeof first === "object" && first.min) {
        return first.min; // use min price
      }

      if (typeof first === "number") {
        return first;
      }
    }

    return 0;
  };


  
  // ✅ Fetch activities
  const fetchActivities = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/activities?page=${currentPage}&limit=9`);
      const data = await res.json();

      const activitiesData = data.activities || data;

      const mappedData = activitiesData.map(act => ({
        ...act,
        category: act.category || [],
        highlights: act.highlights || [],
        images: act.images || [],
        details: act.details || {},
        reviews: act.reviews || 0,
      }));

      setActivities(mappedData);
      if (data.pages) {
        setTotalPages(data.pages);
      }
      } catch (err) {
        console.error("Failed to fetch activities:", err);
      } finally {
        setLoading(false);
      }
    });

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  useEffect(() => {
    if (!socket) return;

    const handleTripUpdate = (updatedTrip) => {
      console.log("🔥 Real-time update received:", updatedTrip);

      // safest approach: refetch activities
      fetchActivities();
    };

    socket.on("tripUpdated", handleTripUpdate);

    return () => {
      socket.off("tripUpdated", handleTripUpdate);
    };
  }, [fetchActivities]);

  // ✅ Combined filtering (search + category)
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = selectedCategory
      ? activity.category.includes(selectedCategory)
      : true;

    const matchesLocation = selectedLocation
      ? activity.location?.toLowerCase().includes(selectedLocation.toLowerCase())
      : true;

    const matchesRating = selectedRating
      ? activity.rating >= Number(selectedRating)
      : true;

    const matchesPrice = selectedPrice
      ? getActivityPrice(activity.price) <= Number(selectedPrice)
      : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesRating &&
      matchesPrice
    );
  });


  // ✅ Handle category change (used by Sidebar/Filters)
  const handleCategoryChange = (e) => {setSelectedCategory(e.target.value);};
  const handleLocationChange = (e) => {setSelectedLocation(e.target.value);};
  const handleRatingChange = (e) => {setSelectedRating(e.target.value);};
  const handlePriceChange = (e) => {setSelectedPrice(Number(e.target.value));};

  const handleClick = (e) => {setSelectedCategory(e.target.value);};

  const params = new URLSearchParams(location.search);
  const cityFromURL = params.get("city");

  useEffect(() => {
    if (cityFromURL) {
      setSelectedLocation(cityFromURL);
    }
  }, [cityFromURL]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedLocation, selectedPrice, selectedRating]);


  if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs title="Explore" pagename={<a href="/explore">Explore</a>} bgImage={exploreimg} />

      <section className='py-5 explore_list'>
        <Container>
          <Row>
            {/* SEARCH */}
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

            <Recommended handleClick={handleClick}/>

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
                <Sidebar
                  handleCategoryChange={handleCategoryChange}
                  handleLocationChange={handleLocationChange}
                  handlePriceChange={handlePriceChange}
                  handleRatingChange={handleRatingChange}
                />
              </div>
            </Col>

            {/* RIGHT SIDE (Cards) */}
            <Col xl='9' lg='8' md='12' sm='12'>
              <Row>
                {filteredActivities.length === 0 ? (
                  <p>No activities found.</p>
                ) : (
                  filteredActivities.map((activity) => (
                    <Col xl={4} lg={6} md={6} sm={6} className='mb-5' key={activity.id}>
                      <Link to={`/activity/${activity.slug || activity.id}`} className='text-decoration-none'>
                        <ActivityCard val={activity} />
                      </Link>
                    </Col>
                  ))
                )}
              </Row>
              <div className='pagination'>
                {Array.from(
                  { length: totalPages },
                  (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* MOBILE FILTERS */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Recommended />
          <Sidebar
            handleCategoryChange={handleCategoryChange}
            handleLocationChange={handleLocationChange}
            handlePriceChange={handlePriceChange}
            handleRatingChange={handleRatingChange}
/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Explore;