import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImg from "../../assets/images/slider/tokyo-tower-day.jpg"
import sliderImg1 from "../../assets/images/slider/tokyo-disney.jpg"
import sliderImg2 from "../../assets/images/slider/dotonbori.webp"
import '../Banner/banner.css'

const Banner = () => {
  return (
    <>
        <section className='slider'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img src={sliderImg} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className='slider_des'>
                            <h5 className='heading'>EXPLORE <span>AND DISCOVER</span></h5>
                            <p className="sub_text">Go see what the world of Japan has to offer.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg1} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className='slider_des'>
                            <h5 className='heading'>HAVE FUN <span>AND ENJOY</span></h5>
                            <p className="sub_text">Lots of fun things to do by yourself or with others.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg2} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className='slider_des'>
                            <h5 className='heading'>LEARN <span>AND IMMERSE YOURSELF</span></h5>
                            <p className="sub_text">Enjoy the cultures of Japan, whether in the day or night.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    </>
  )
}

export default Banner