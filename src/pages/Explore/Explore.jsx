import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Col, Container, Row } from 'react-bootstrap'
import PopularCard from '../../components/Cards/PopularCard'
import { popularsData } from '../../utils/data'
import Filters from './Filters'

const Explore = () => {
  return (
    <>
      <Breadcrumbs title="Explore" pagename="Explore" />
        <section className='py-5 explore_list'>
          <Container>
            <Row>
              <Col xl='3' lg='4' md='12' sm='12'>
                <Filters />
              </Col>
              <Col xl='9' lg='8' md='12' sm='12'>
                <Row>
                {popularsData.map((val, inx) => {
                  return (
                  <Col xl={4} lg={6} md={6} sm={6} className='mb-5' key={inx}>
                    <PopularCard val={val} />
                  </Col>
                );
              })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

    </>
  )
}

export default Explore