import React, { useState } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import "../Explore/explore.css"
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { exploreDetails } from '../../utils/data'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Swiper modules
import { Navigation, Pagination } from 'swiper/modules'

const ExploreDetails = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Breadcrumbs 
        title={exploreDetails.title} 
        pagename={<NavLink to='/explore'>Explore</NavLink>}
        childpagename={exploreDetails.title}
      />

      <section className='explore_details py-5'>
        <Container>
          <h1 className='fs-2 font-bold mb-4'>
            {exploreDetails.title}
          </h1>

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
                {exploreDetails.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img.original}
                      alt={`slide-${index}`}
                      className="explore-image"
                      onClick={() => {
                        setActiveIndex(index)
                        setIsOpen(true)
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>

            {/* RIGHT: Details */}
            {/* <Col md={6}>
              <p>{exploreDetails.des}</p> */}

              {/* Example: highlights */}
              {/* <ul>
                {exploreDetails.highlights?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Col> */}
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
                {exploreDetails.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img.original}
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
  )
}

export default ExploreDetails