import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col } from 'react-bootstrap'
import apps from  "../../assets/images/breadcrumb/japan-apps-graphic.jpg"

const Apps = () => {
  return (
    <>
      <Breadcrumbs title="essential apps" pagename="Essential Apps" bgImage={apps} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="8">
              <div className='about-content'>
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    What Is This Website All About 
                  </h2>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
                  <p className='body-text mb-2'>
                    This is test text until we can create official ones, for the time being this is for testing only.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Apps