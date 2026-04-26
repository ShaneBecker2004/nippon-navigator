import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import onlineImg from "../../assets/images/breadcrumb/wifi-banner-image.jpg"

const Online = () => {
  return (
    <>
      <Breadcrumbs title="staying connected" pagename="Staying Connected" bgImage={onlineImg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content'>
                <h2 className='h2 font-bold pt-4 pb-2'>
                  Best Ways to Stay Connected Online
                </h2>
                <p className='body-text mb-4'>
                  Staying connected in Japan is essential for navigation, reservations, and communication. Fortunately, there are several reliable options depending on your needs, budget, and device compatibility.
                </p>

                {/* eSIM */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>📱 eSIM (Most Convenient)</h3>
                <p className='body-text mb-3'>
                  eSIMs are the easiest way to get mobile data in Japan. You can purchase and activate them before you arrive, so you’re connected as soon as you land.
                </p>
                <p className='body-text mb-4'>
                  This option is ideal for solo travelers or anyone who wants a quick, no-hassle setup without carrying extra devices.
                </p>

                {/* Pocket WiFi */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>📶 Pocket WiFi (Best for Groups)</h3>
                <p className='body-text mb-3'>
                  Pocket WiFi devices provide strong, reliable internet and can be shared across multiple devices. They’re a great option for groups or heavy data users.
                </p>
                <p className='body-text mb-4'>
                  Keep in mind you’ll need to carry and charge the device, and return it at the end of your trip.
                </p>

                {/* SIM Cards */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>💳 Physical SIM Cards</h3>
                <p className='body-text mb-3'>
                  Prepaid SIM cards are widely available at airports and electronics stores. They’re a good alternative if your phone doesn’t support eSIM.
                </p>
                <p className='body-text mb-4'>
                  Setup may take a bit longer compared to eSIM, but they still provide solid coverage across most cities.
                </p>

                {/* Free WiFi */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>🌐 Free WiFi (Limited Use)</h3>
                <p className='body-text mb-3'>
                  Free WiFi is available in convenience stores, train stations, and cafes, but it can be inconsistent and often requires sign-ins.
                </p>
                <p className='body-text mb-4'>
                  It’s best used as a backup rather than your primary connection method.
                </p>

                {/* Recommendation */}
                <h3 className='h4 font-bold pt-4 pb-2 mb-2'>✅ What We Recommend</h3>
                <p className='body-text mb-5'>
                  For most travelers, an eSIM offers the best balance of convenience and reliability. If you’re traveling with others or using multiple devices, a pocket WiFi may be the better choice.
                </p>
              </div>
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

export default Online