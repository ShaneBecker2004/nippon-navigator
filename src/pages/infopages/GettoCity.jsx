import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import shinkansenimg from  "../../assets/images/breadcrumb/shinkansen.jpg"

const GettoCity = () => {
  return (
    <>
      <Breadcrumbs title="getting around the city" pagename="Getting Around The City" bgImage={shinkansenimg}/>
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content mb-4'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Transportation in Japan
                </h2>
                <p className='body-text'>
                  Getting around Japanese cities is efficient, safe, and easy once you understand the main transport options.
                  Trains, buses, and taxis all work together, and most travelers rely on IC cards for seamless payment.
                </p>
              </div>
            </Col>
            <Col md="10">

              <h2 className='h2 font-bold pt-4 pb-2 mb-2'>
                🚆 Trains & Rail System
              </h2>

              <p className='body-text mb-4'>
                Japan has one of the most advanced rail systems in the world, offering fast, reliable, and highly organized transportation across cities and regions.
              </p>

              {/* SHINKANSEN */}
              <h4 className='font-bold mb-2'>🚄 Shinkansen (Bullet Train)</h4>
              <p className='body-text mb-4'>
                The Shinkansen connects major cities across Japan at high speeds. It is the fastest and most comfortable option for long-distance travel, such as Tokyo to Kyoto or Osaka.
              </p>

              {/* JR */}
              <h4 className='font-bold mb-2'>🚆 JR (Japan Railways)</h4>
              <p className='body-text mb-4'>
                JR lines are the main national rail network covering both urban and regional routes. The JR Yamanote Line in Tokyo is one of the most important circular routes for getting around the city.
              </p>

              {/* METRO */}
              <h4 className='font-bold mb-2'>🚇 Metro System (City Rail)</h4>
              <p className='body-text mb-4'>
                Metro systems operate within major cities like Tokyo and Osaka. They are fast, frequent, and ideal for traveling between business districts and neighborhoods.
              </p>

              {/* LOCAL TRAINS */}
              <h4 className='font-bold mb-2'>🚉 Local Trains</h4>
              <p className='body-text mb-4'>
                Local trains stop at every station and are commonly used for short-distance travel between suburbs and nearby towns. They are slower but very accessible and often run on JR or private rail lines.
              </p>

              {/* SUBWAY */}
              <h4 className='font-bold mb-2'>🚇 Subway Lines</h4>
              <p className='body-text mb-4'>
                Subway lines run underground and are integrated with city metro systems. They are the easiest way to navigate dense urban areas and connect key city zones.
              </p>

              {/* TIP */}
              <p className='body-text mb-5'>
                <strong>Tip:</strong> Rush hours (7–9 AM and 5–7 PM) can be extremely crowded. If possible, travel outside peak times for a more comfortable experience.
              </p>

            </Col>
            <Col md="10">
                <h2 className='h2 font-bold pt-4 pb-2 mb-2'>🚌 Buses</h2>
                <p className='body-text'>
                  Buses are useful for reaching areas not covered by trains, especially in suburban or rural locations.
                  In cities, they are reliable but slightly more complex for first-time visitors.
                </p>
                <p className='body-text mb-5'>
                  Many buses accept IC cards, making payment simple and cash-free.
                </p>
            </Col>
            <Col md="10">
                <h2 className='h2 font-bold pt-4 pb-2 mb-2'>🚕 Taxis & Ride Services</h2>
                <p className='body-text'>
                  Taxis are clean, safe, and widely available, but more expensive than public transportation.
                  They are useful for late-night travel or when carrying heavy luggage.
                </p>
                <p className='body-text mb-5'>
                  Some areas also support ride apps like Uber or local alternatives.
                </p>
            </Col>
            <Col md="10">
                <h2 className='h2 font-bold pt-4 pb-2 mb-2'>💳 Payment Methods</h2>
                <p className='body-text'>
                  Most travelers use IC cards such as Suica or Pasmo. These rechargeable cards work on trains, buses, and even vending machines.
                </p>
                <p className='body-text mb-2'>
                  You can also use:
                </p>
                <ul className='body-text'>
                  <li>IC Cards (Suica, Pasmo) – easiest option</li>
                  <li>Cash (coins & bills) – still widely accepted</li>
                  <li>Credit cards – accepted in most urban transport hubs</li>
                </ul>
            </Col>
            <Col md="10">
              <Card className='p-4 mt-5 shadow-sm border-0 text-center bg-light'>
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

export default GettoCity