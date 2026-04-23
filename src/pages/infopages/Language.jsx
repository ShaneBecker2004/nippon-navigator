import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import mannerImg from  "../../assets/images/breadcrumb/japan-etiquette-banner.jpg"

const Language = () => {
  return (
    <>
      <Breadcrumbs title="Language & Etiquette" pagename="Language & Etiquette" bgImage={mannerImg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="8">
              <div className='about-content'>
                <div className='about-image position-relative'>
                  </div>
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

            <Col md="10">
              <Card className='p-4 mt-4 shadow-sm border-0 text-center bg-light'>
                <h3 className='mb-3 font-bold'>Did this information help you?</h3>

                <div className='d-flex justify-content-center gap-3'>
                  <button className='btn btn-outline-success px-4'>
                    👍 Yes
                  </button>
                  <button className='btn btn-outline-danger px-4'>
                    👎 No
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Language
