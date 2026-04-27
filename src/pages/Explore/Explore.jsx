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
  const [selectedSubcity, setSelectedSubcity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedAccessibility, setSelectedAccessibility] = useState("");
  const [selectedSeasonal, setSelectedSeasonal] = useState("");
  const [selectedTraveler, setSelectedTraveler] = useState("");
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [selectedRecommended, setSelectedRecommended] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleFilter = (setter) => (value) => {
    setter((prev) => (prev === value ? "" : value));
  };

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
      const res = await fetch(`${API}/api/activities?page=${currentPage}&limit=15`);
      const data = await res.json();

      const activitiesData = data.activities || data;

      const mappedData = activitiesData.map(act => ({
        ...act,
        category: Array.isArray(act.category)
          ? act.category
          : act.category
            ? [act.category]
            : [],
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
  }, [currentPage]);

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

  const params = new URLSearchParams(location.search);
  const cityFromURL = params.get("city");
  const categoryFromURL = params.get("category");

  const categoryList = params.getAll("category") || [];

  // ✅ Combined filtering (search + category)
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      !search ||
      activity.title?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      (!selectedCategory && categoryList.length === 0) ||
      (selectedCategory && activity.category?.includes(selectedCategory)) ||
      (categoryList.length > 0 &&
        categoryList.some(cat => activity.category?.includes(cat)));

    const matchesLocation =
      !selectedLocation ||
      (activity.location ?? "")
        .toLowerCase()
        .includes(selectedLocation.toLowerCase());

    const matchesSubcity =
      !selectedSubcity ||
      (activity.subcity ?? "")
        .toLowerCase().trim() === selectedSubcity.toLowerCase().trim();

    const matchesRating =
      !selectedRating ||
      Number(activity.rating) >= Number(selectedRating);

    const matchesPrice =
      !selectedPrice ||
      getActivityPrice(activity.price) <= Number(selectedPrice);

    const matchesDuration =
      !selectedDuration ||
      (activity.duration ?? "").includes(selectedDuration);

    const matchesAccessibility =
      !selectedAccessibility ||
      (Array.isArray(activity.accessibility)
        ? activity.accessibility.includes(selectedAccessibility)
        : (activity.accessibility ?? "")
          .toLowerCase()
          .includes(selectedAccessibility.toLowerCase()));

    const matchesEnvironment =
      !selectedEnvironment ||
      (activity.environment ?? []).includes(selectedEnvironment);

    const matchesSeasonal =
      !selectedSeasonal ||
      (activity.seasonal ?? []).includes(selectedSeasonal);

    const matchesTraveler =
      !selectedTraveler ||
      (activity.traveler ?? []).includes(selectedTraveler);

    const matchesRecommended =
      !selectedRecommended ||
      (selectedRecommended === "popular" && activity.popular === true) ||
      (selectedRecommended === "top_rated" && activity.top_rated === true) ||
      (selectedRecommended === "must_do" && activity.must_do === true) ||
      (selectedRecommended === "hidden" && activity.hidden === true) ||
      (selectedRecommended === "local" && activity.local === true);


    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesSubcity &&
      matchesRating &&
      matchesPrice &&
      matchesDuration &&
      matchesAccessibility &&
      matchesEnvironment &&
      matchesSeasonal &&
      matchesTraveler &&
      matchesRecommended
    );
  });

  // ✅ Handle category change (used by Sidebar/Filters)
  const handleCategoryChange = (e) =>
    toggleFilter(setSelectedCategory)(e.target.value);

  const handleLocationChange = (e) =>
    toggleFilter(setSelectedLocation)(e.target.value);

  const handleSubcityChange = (e) => {
    setSelectedSubcity((prev) =>
      prev === e.target.value ? "" : e.target.value
    );
  };

  const handleDurationChange = (e) =>
    toggleFilter(setSelectedDuration)(e.target.value);

  const handleAccessibilityChange = (e) =>
    toggleFilter(setSelectedAccessibility)(e.target.value);

  const handleEnvironmentChange = (e) =>
    toggleFilter(setSelectedEnvironment)(e.target.value);

  const handleSeasonalChange = (e) =>
    toggleFilter(setSelectedSeasonal)(e.target.value);

  const handleTravelerChange = (e) =>
    toggleFilter(setSelectedTraveler)(e.target.value);

  const handleRatingChange = (e) =>
    toggleFilter(setSelectedRating)(e.target.value);


  const handlePriceChange = (e) =>
    toggleFilter(setSelectedPrice)(Number(e.target.value));

  const handleClick = (value) => {
    setSelectedRecommended(prev => prev === value ? "" : value);
  };


  console.log(
    activities
      .filter(a => a.location === selectedLocation)
      .map(a => ({
        location: a.location,
        subcity: a.subcity,
        details: a.details
      }))
  );

  const subcities = [
    ...new Set(
      activities
        .filter(a => a.location === selectedLocation)
        .map(a => a.subcity || a.details?.subcity)
        .filter(Boolean)
    )
  ];

  useEffect(() => {
    if (cityFromURL) {
      setSelectedLocation(cityFromURL);
    }
  }, [cityFromURL]);

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  useEffect(() => {
    setSelectedSubcity(""); // reset when city changes
  }, [selectedLocation]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedLocation, selectedSubcity, selectedPrice, selectedRating, selectedAccessibility, selectedDuration, selectedEnvironment, selectedSeasonal, selectedTraveler]);


  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedSubcity("");
    setSelectedRating("");
    setSelectedPrice("");
    setSelectedDuration("");
    setSelectedAccessibility("");
    setSelectedEnvironment("");
    setSelectedSeasonal("");
    setSelectedTraveler("");
    setSearch("");
  };

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

            {/* LEFT SIDE (Filters) */}
            <Col xl='3' lg='4' md='5' sm='6'>
              {/* Mobile filter button */}
              <div className='d-lg-none d-block' onClick={handleShow}>
                <button className='filterBtn primaryBtn mb-4'>
                  <i className='bi bi-funnel'></i> Filters
                </button>
              </div>

              <div className='filter-reset-section'>
                <button className="reset-btn" onClick={handleResetFilters}>
                  Clear All Filters
                </button>
              </div>

              {/* Desktop filters */}
              <div className='filters d-lg-block d-none'>
                <Sidebar
                  handleCategoryChange={handleCategoryChange}
                  handleLocationChange={handleLocationChange}
                  handleSubcityChange={handleSubcityChange}
                  handlePriceChange={handlePriceChange}
                  handleRatingChange={handleRatingChange}
                  handleDurationChange={handleDurationChange}
                  handleAccessibilityChange={handleAccessibilityChange}
                  handleEnvironmentChange={handleEnvironmentChange}
                  handleSeasonalChange={handleSeasonalChange}
                  handleTravelerChange={handleTravelerChange}
                  selectedCategory={selectedCategory}
                  selectedLocation={selectedLocation}
                  selectedSubcity={selectedSubcity}
                  selectedPrice={selectedPrice}
                  selectedRating={selectedRating}
                  selectedDuration={selectedDuration}
                  selectedAccessibility={selectedAccessibility}
                  selectedEnvironment={selectedEnvironment}
                  selectedSeasonal={selectedSeasonal}
                  selectedTraveler={selectedTraveler}
                  subcities={subcities}
                />
              </div>
            </Col>

            {/* RIGHT SIDE (Cards) */}
            <Col xl='9' lg='8' md='12' sm='12'>
              <Row>

                <Recommended handleClick={handleClick} />

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
              <Row>
                <Col md='8'>
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
            </Col>
          </Row>
        </Container>
      </section>

      {/* MOBILE FILTERS */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className='fw-bold fs-2'>
              Filters
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button className="reset-btn-small" onClick={handleResetFilters}>
            Clear All Filters
          </button>
          <Sidebar
            handleCategoryChange={handleCategoryChange}
            handleLocationChange={handleLocationChange}
            handleSubcityChange={handleSubcityChange}
            handlePriceChange={handlePriceChange}
            handleRatingChange={handleRatingChange}
            handleDurationChange={handleDurationChange}
            handleAccessibilityChange={handleAccessibilityChange}
            handleEnvironmentChange={handleEnvironmentChange}
            handleSeasonalChange={handleSeasonalChange}
            handleTravelerChange={handleTravelerChange}
            selectedCategory={selectedCategory}
            selectedLocation={selectedLocation}
            selectedSubcity={selectedSubcity}
            selectedPrice={selectedPrice}
            selectedRating={selectedRating}
            selectedDuration={selectedDuration}
            selectedAccessibility={selectedAccessibility}
            selectedEnvironment={selectedEnvironment}
            selectedSeasonal={selectedSeasonal}
            selectedTraveler={selectedTraveler}
            subcities={subcities}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Explore;