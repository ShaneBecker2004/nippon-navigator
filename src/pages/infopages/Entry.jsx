import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card } from 'react-bootstrap'
import travelimg from  "../../assets/images/breadcrumb/passport-visa-graphic.jpg"
import visaimg from "../../assets/images/travel/visa-image.jpg"
import immigrationimg from "../../assets/images/travel/visit-japan-web-logo.gif"
import './infopage.css'

const Entry = () => {
  return (
    <>
      <Breadcrumbs title="Entry Requirements" pagename="Entry Requirements" bgImage={travelimg} />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md="10">
              <div className='about-content mb-5'>
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    What Do You Need In Order To Travel To Japan?
                  </h2>
                <p className='body-text mb-2'>
                  Traveling to Japan is a smooth and straightforward process for most visitors, but it’s important to prepare the right documents before your trip.
                  Depending on your nationality, you may be able to enter Japan visa-free for short stays, while others will need to apply for a visa in advance.
                </p>
                <p className='body-text mb-2'>
                  In addition to a valid passport, travelers should be ready to provide details such as their accommodation address, return flight information, and purpose of visit.
                  Preparing these ahead of time will help you move through the airport quickly and avoid delays upon arrival.
                </p>
                <p className='body-text mb-2'>
                  💡 Tip: Keep a screenshot or printed copy of your accommodation details and return flight handy, as you may need to show them during immigration.
                </p>
              </div>
            </Col>
            <Col md="10">
              <div className='about-content'>
                <img src={visaimg} alt="about" className='img-fluid rounded-5' />
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    Visa Information 
                  </h2>
                <p className='body-text mb-2'>
                  Japan offers visa-free entry to many countries for short-term tourism, typically allowing stays of up to 90 days. However, visa requirements vary depending on your nationality,
                  so it’s important to confirm your eligibility before traveling.
                </p>
                <p className='body-text mb-2'>
                  If a visa is required, you will need to apply through a Japanese embassy or consulate in your country. Be prepared to provide documents such as your passport, travel itinerary,
                  and proof of accommodation.
                </p>
                  <p className='body-text mb-2'>
                    <a
                      href="https://www.mofa.go.jp/j_info/visit/visa/"
                      target="_blank"
                      rel="noreferrer"
                    >    
                      Learn more about Visa details here
                    </a>
                  </p>
              </div>
            </Col>
            <Col md="10">
              <div className='about-content'>
                <img src={immigrationimg} alt="about" className='img-fluid rounded-5' />
                  <h2 className='h2 font-bold pt-4 pb-2'>
                    Immigration & Customs
                  </h2>
                <p className='body-text mb-2'>
                  Upon arrival in Japan, you will go through immigration and customs screening. Travelers must present a valid passport and may be asked questions about their stay, including
                  where they will be staying and how long they plan to visit.
                </p>
                <p className='body-text mb-2'>
                  Japan offers an online service called Visit Japan Web, which allows you to complete immigration and customs forms in advance. This can significantly speed up your arrival process
                  and reduce paperwork at the airport.
                </p>
                  <p className='body-text mb-5'>
                  <a
                    href="https://www.vjw.digital.go.jp/main/#/vjwplo001"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click to go to "Visit Japan Web" 
                  </a>
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

export default Entry