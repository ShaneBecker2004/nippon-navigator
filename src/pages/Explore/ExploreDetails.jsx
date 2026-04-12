import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Explore/explore.css";

const ExploreDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch activity by ID
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/activities/${id}`);
        const data = await res.json();
        setActivity(data);
      } catch (err) {
        console.error("Failed to fetch activity:", err);
      }
    };

    fetchActivity();
  }, [id]);

  if (!activity) return <p>Loading activity...</p>;

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        title={activity.title} 
        pagename={<NavLink to='/explore'>Explore</NavLink>}
        childpagename={activity.title}
        bgImage={activity.thumbnail}
      />

      <section className='explore_details py-5'>
        <Container>
          <h1 className='fs-2 font-bold mb-4'>{activity.title}</h1>

          <Row>
            {/* LEFT: Image Gallery */}
            <Col md={8}>
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

            {/* RIGHT: Details */}
            <Col md={4}>
              <p><strong>Location:</strong> {activity.location}</p>
              <p><strong>Open Hours:</strong> {activity.open_hours}</p>
              <p><strong>Phone:</strong> {activity.phone}</p>
              <p><strong>Website:</strong> <a href={activity.website} target="_blank" rel="noreferrer">{activity.website}</a></p>
              <p><strong>Duration:</strong> {activity.duration}</p>
              <p><strong>Rating:</strong> {activity.rating} ({activity.review || 0} reviews)</p>
              <p><strong>Price:</strong> {activity.price ? `$${activity.price}` : "N/A"}</p>

              {/* Categories */}
              <div className="mb-3">
                {Array.isArray(activity.category) ? activity.category.map((cat, i) => (
                  <span key={i} className={cat.replace(/ .*/, "") + " badge me-1"}>{cat}</span>
                )) : <span className="badge">{activity.category}</span>}
              </div>

              {/* Highlights */}
              <h5>Highlights:</h5>
              <ul>
                {activity.highlights?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Details JSON */}
              {activity.details && Object.keys(activity.details).length > 0 && (
                <>
                  {Object.entries(activity.details).map(([key, value], idx) => {
                    if (!value || (Array.isArray(value) && value.length === 0)) return null;

                    // Render array as list
                    if (Array.isArray(value)) {
                      return (
                        <div key={idx} className="mb-3">
                          <h5 className="mt-2">{key.charAt(0).toUpperCase() + key.slice(1)}:</h5>
                          <ul>
                            {value.map((item, i) => (
                              <li key={i}>
                                {/* If it looks like a URL, make it clickable */}
                                {typeof item === 'string' && (item.startsWith('http') || item.startsWith('/')) ? (
                                  <a href={item} target="_blank" rel="noreferrer">
                                    {item.includes('.pdf') ? "View PDF" : "View Here"}
                                  </a>
                                ) : (
                                  item
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    // Render single string
                    return (
                      <p key={idx}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
                    );
                  })}
                </>
              )}
            </Col>
          </Row>

          {/* FULLSCREEN MODAL */}
          {isOpen && (
            <div className="fullscreen-overlay">
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <Swiper
                initialSlide={activeIndex}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="fullscreen-swiper"
              >
                {activity.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt={`fullscreen-${index}`}
                      className="fullscreen-image"
                    />
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