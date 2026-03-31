import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import "../Explore/explore.css"
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { exploreDetails } from '../../utils/data'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ExploreDetails = () => {
  return (
    <>
      <Breadcrumbs 
        title={exploreDetails.title} 
        pagename={<NavLink to='/explore'>Explore</NavLink>}
        childpagename={exploreDetails.title}
      />

      <section className='explore_details py-5'>
        <Container>
          <Row>
            <h1 className='fs-2 font-bold mb-4'>{exploreDetails.title}</h1>

            <Swiper spaceBetween={10} slidesPerView={1}>
              {exploreDetails.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt="" 
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default ExploreDetails