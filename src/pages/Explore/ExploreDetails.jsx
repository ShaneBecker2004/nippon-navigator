import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col, Nav, Tab, Card, CardBody } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Explore/explore.css";

const ExploreDetails = () => {
  const { slug } = useParams();

  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ NEW
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const formatKey = (key) => {
  return key
    .split(/[_\s]+/) // handles "official hotel" or "official_hotel"
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };

  const price =
    typeof activity?.price === "string"
      ? JSON.parse(activity.price)
      : activity?.price;

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/activities/slug/${slug}`);
        const data = await res.json();

        // small delay for smoother UX
        setTimeout(() => {
          setActivity(data);
          setLoading(false);
        }, 300);

      } catch (err) {
        console.error("Failed to fetch activity:", err);
        setLoading(false);
      }
    };

    fetchActivity();
  }, [slug]);

  // ✅ FULLSCREEN LOADER
  if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs
        title={activity.title}
        pagename={<NavLink to='/explore'>Explore</NavLink>}
        childpagename={activity.title}
        bgImage={activity.thumbnail}
      />

      <section className='explore_details py-5'>
        <Container className="overview-container">
          <h1 className='fs-2 font-bold mb-4'>{activity.title}</h1>

          <Row>
            {/* LEFT: Image Gallery */}
            <Col md={13}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="explore-swiper"
              >
                {activity.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="explore-image"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsOpen(true);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>

            <Tab.Container defaultActiveKey="1">
              <Col md={8} className='mb-3 mb-md-0'>
                <Nav variant="pills" className="flex-row nav-bars rounded-2 mt-4">
                  <Nav.Item>
                    <Nav.Link eventKey="1">Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Location</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4">Ratings & Reviews</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className='mt-4'>
                  <Tab.Pane eventKey="1">
                    <div className="explore_details overview-section">
                      <h1 className="font-bold mb-3 h3 border-bottom pb-2">
                        Overview
                      </h1>

                      <div className="overview-list">
                        <p><strong>Description:</strong> {activity.description}</p>
                        <p><strong>Location:</strong> {activity.location}</p>
                        <p><strong>Open Hours:</strong> {activity.open_hours}</p>
                        <p><strong>Phone:</strong> {activity.phone}</p>
                        <p><strong>Duration:</strong> {activity.duration}</p>
                        <a
                          href={activity.website}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Visit Website ↗
                        </a>
                      </div>

                      {/* 💰 Pricing Section (clean separation) */}
                      <div className="pricing-section mt-4">
                        <h5 className="font-bold mb-3 h3 border-bottom pb-2">
                          Pricing
                        </h5>

                        {price && typeof price === "object" ? (
                          Object.entries(price).map(([type, value]) => {
                            let displayPrice = "";

                            if (typeof value === "object" && value.min && value.max) {
                              // ✅ RANGE
                              displayPrice = `${value.min.toLocaleString()} - ${value.max.toLocaleString()}`;
                            } else if (typeof value === "number") {
                              // ✅ SINGLE PRICE
                              displayPrice = value.toLocaleString();
                            } else if (typeof value === "string") {
                              // ✅ STRING RANGE
                              displayPrice = value;
                            }

                            return (
                              <div key={type}>
                                <strong>{formatKey(type)}:</strong>{" "}
                                {activity.currency === "JPY" ? "¥" : "$"}
                                {displayPrice}
                              </div>
                            );
                          })
                        ) : (
                          <p>No pricing available</p>
                        )}
                      </div>
                      </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="2">
                    <div className='explore_details highlights-section'>
                      <h3 className='font-bold mb-2 h3 border-bottom pb-2'>Information
                        {" "}
                      </h3>
                      <ul className='highlights-list'>
                        {activity.highlights?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* OTHER DETAILS */}
                    <h4 className="font-bold mb-2 h3 border-bottom pb-2">
                      Other Details
                    </h4>

                    {activity.details && Object.keys(activity.details).length > 0 && (
                      <>
                        {Object.entries(activity.details).map(([key, value], idx) => {
                          if (!value || (Array.isArray(value) && value.length === 0)) return null;

                          // 🟢 ARRAY VALUES
                          if (Array.isArray(value)) {
                            return (
                              <div key={idx} className="mb-3">
                                <h5 className="mt-2">
                                  {formatKey(key)}:
                                </h5>

                                <ul className="details-list">
                                  {value.map((item, i) => (
                                    <li key={i}>
                                      {typeof item === "string" ? (
                                        (() => {
                                          const lower = item.toLowerCase();

                                          const isLink = lower.startsWith("http") || lower.startsWith("/");
                                          const isPDF = lower.endsWith(".pdf");
                                          const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(lower);

                                          if (isLink) {
                                            return (
                                              <a href={item} target="_blank" rel="noreferrer">
                                                {isPDF
                                                  ? "View PDF"
                                                  : isImage
                                                    ? "View Image"
                                                    : "View Link"}
                                              </a>
                                            );
                                          }

                                          return item;
                                        })()
                                      ) : (
                                        item
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }

                          // 🔵 SINGLE VALUES
                          return (
                            <p key={idx}>
                              <span className="detail-key">
                                {formatKey(key)}:
                              </span>{" "}
                              {value}
                            </p>
                          );
                        })}
                      </>
                    )}

                    {!activity.details && (
                      <p>No additional information available.</p>
                    )}
                  </Tab.Pane>

                  <Tab.Pane eventKey="3">
                    <div className="explore_details location-section">
                      <h1 className="font-bold mb-3 h3 border-bottom pb-2">
                        Location
                      </h1>
                      {activity.map_embed_url && (
                        <div className="map-section mt-4 p-3 bg-white rounded shadow-sm">

                          <div className='map-container'>
                            <iframe
                              src={activity.map_embed_url}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              loading="lazy"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="4">
                    <div className="explore_details">
                      <h3 className="font-bold mb-2 h3 border-bottom pb-2">Ratings & Reviews</h3>
                      <p><strong>Rating:</strong> {activity.rating} ({activity.review || 0} reviews)</p>
                      <p>Coming Soon!</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>

            <Col md={4}>
              <aside>
                <Card className='rounded-3 p-2 shandow-sm mb-4'>
                  <CardBody>
                    <Stack gap={2} direction="horizontal" className="mt-1 mb-1">
                      {price && Object.keys(price).length > 0 ? (
                        (() => {
                          const [label, value] = Object.entries(price)[0];

                          let displayPrice = "";

                          if (typeof value === "object" && value.min && value.max) {
                            displayPrice = `${value.min.toLocaleString()} - ${value.max.toLocaleString()}`;
                          } else if (typeof value === "number") {
                            displayPrice = value.toLocaleString();
                          } else {
                            displayPrice = value;
                          }

                          return (
                            <Stack direction="horizontal" className="mt-1 mb-1">
                              <h1 className="font-bold mb-0 h3">
                                {activity.currency === "JPY" ? "¥" : "$"}
                                {displayPrice}
                              </h1>
                              <span className="fs-4">/{formatKey(label)}</span>
                            </Stack>
                          );
                        })()
                      ) : (
                        <p>Price Unavailable</p>
                      )}
                    </Stack>

                    <div className="d-flex align-items-center mb-4">
                      <p className="mb-0 fw-bold">
                        ⭐ {activity.rating}{" "}
                        <span className="fw-normal text-muted">
                          ({activity.reviews || 0} reviews)
                        </span>
                      </p>
                    </div>

                    <NavLink className="primaryBtn w-100 btn-lg d-block text-center">
                      Add to Trip
                    </NavLink>

                  </CardBody>
                </Card>

                <Card className='card-info p-2 shadow-sm'>
                  <CardBody>
                    <h1 className='font-bold mb-2 h3'>
                      Need Help ?
                    </h1>
                    <ListGroup>
                      <ListGroup.Item className='border-0 mt-1'>
                        <i className="bi bi-telephone me-2"></i>Call us on: <strong>1-800-123-4567</strong></ListGroup.Item>
                      <ListGroup.Item className='border-0 mt-1'>
                        <i className="bi bi-envelope me-2"></i>Email us at: <strong> support@nipponnavigator.com</strong></ListGroup.Item>
                      <ListGroup.Item className='border-0 mt-1'>
                        <i className="bi bi-alarm me-2"></i>Open from: <strong>9:00 AM - 5:00 PM</strong></ListGroup.Item>
                      <ListGroup.Item className='border-0 mt-1'>
                        <i className="bi bi-headset me-2"></i><strong>Let Us Call You</strong></ListGroup.Item>
                      <ListGroup.Item className='border-0 mt-1'>
                        <i className="bi bi-calendar-check me-2"></i><strong>Book an Appointment</strong></ListGroup.Item>
                    </ListGroup>
                  </CardBody>
                </Card>
              </aside>
            </Col>
          </Row>


          {/* FULLSCREEN IMAGE MODAL */}
          {isOpen && (
            <div className="fullscreen-overlay">
              <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>

              <Swiper
                initialSlide={activeIndex}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
              >
                {activity.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} className="fullscreen-image" alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ExploreDetails;