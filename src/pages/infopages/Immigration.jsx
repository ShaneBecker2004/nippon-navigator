import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, NavLink } from 'react-bootstrap'
import immigrationimg from  "../../assets/images/breadcrumb/arrivals-lobby-osaka.webp"

const Immigration = () => {
  return (
    <>
      <Breadcrumbs title="japan immigration" pagename="Immigration" bgImage={immigrationimg}/>
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
                    <NavLink href="https://www.vjw.digital.go.jp/main/#/vjwplo001">Click Here</NavLink>
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Immigration