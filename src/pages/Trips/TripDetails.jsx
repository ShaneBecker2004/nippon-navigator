import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import "./tripdetails.css"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'react-feather'
import { Nav, NavLink, Button, Tab } from 'react-bootstrap'

const CreatedTrip = () => {
  const { tripId } = useParams()
  const [trip, setTrip] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true)
      setError(null)

      try {
        const auth = getAuth()
        const user = auth.currentUser

        if (!user) {
          throw new Error('You must be signed in to view trip details.')
        }

        const token = await user.getIdToken()

        // ✅ Fetch ONE trip instead of all
        const response = await fetch(`http://localhost:5001/api/trips/${tripId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          const text = await response.text()
          throw new Error(text || 'Failed to load trip')
        }

        const data = await response.json()
        setTrip(data)

      } catch (err) {
        console.error('Error loading trip:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId])

  if (loading) {
    return (
      <div className="detail-section">
        <h2>Loading trip...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="detail-section">
        <h2>Trip Details</h2>
        <p className="error-message">{error}</p>
      </div>
    )
  }

  return (
    <div className="trip-details-container">
      {/* Trip Header Section */}
      <div className="trip-header">
        <div className="trip-header-content">
          <div className="trip-info">
            <h1 className="trip-title">{trip?.tripName || 'Trip Details'}</h1>
            <div className="trip-meta">
              <div className="meta-item">
                <Calendar size={18} />
                {trip?.startDate && trip?.endDate && (
                  <span>
                    {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="meta-item">
                <span className="activity-count">
                  {trip?.savedItems?.length || 0} activities planned
                </span>
              </div>
            </div>
            {trip?.description && (
              <p className="trip-description">{trip.description}</p>
            )}
          </div>
          <div className="trip-actions">
            <NavLink href="/explore">
              <Button className="add-activity-btn">
                <i className="bi bi-plus-circle"></i>
                Add Activity
              </Button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Trip Content Section */}
      <div className="trip-content">
        <Tab.Container defaultActiveKey="itinerary">
          <div className="trip-tabs-section">
            <Nav variant="tabs" className="trip-tabs">
              <Nav.Item>
                <Nav.Link eventKey="itinerary" className="tab-link">
                  <i className="bi bi-map"></i>
                  Itinerary
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="activities" className="tab-link">
                  <i className="bi bi-list-check"></i>
                  Activities ({trip?.savedItems?.length || 0})
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="notes" className="tab-link">
                  <i className="bi bi-sticky"></i>
                  Notes
                </Nav.Link>
              </Nav.Item> */}
            </Nav>

            <Tab.Content className="tab-content">
              <Tab.Pane eventKey="itinerary">
                <div className="itinerary-section">
                  <h3>Trip Itinerary</h3>
                  {trip?.savedItems?.length > 0 ? (
                    <div className="itinerary-timeline">
                      {trip.savedItems.map((item, index) => (
                        <div key={item.id} className="timeline-item">
                          <div className="timeline-marker">
                            <span className="day-number">{index + 1}</span>
                          </div>
                          <div className="timeline-content">
                            <h4>{item.activity.title}</h4>
                            <p className="activity-location">{item.activity.location}</p>
                            {item.notes && <p className="activity-notes">{item.notes}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <i className="bi bi-calendar-x"></i>
                      <h4>No activities planned yet</h4>
                      <p>Start building your itinerary by adding activities from the Explore page.</p>
                    </div>
                  )}
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="activities">
                <div className="activities-section">
                  <h3>Saved Activities</h3>
                  {trip?.savedItems?.length > 0 ? (
                    <div className="activities-grid">
                      {trip.savedItems.map((item) => (
                        <div key={item.id} className="activity-card">
                          <div className="activity-header">
                            <h4>{item.activity.title}</h4>
                            <span className="activity-type">{item.activity.type}</span>
                          </div>
                          <p className="activity-description">{item.activity.description}</p>
                          <div className="activity-meta">
                            <span><i className="bi bi-geo-alt"></i> {item.activity.location}</span>
                            {item.activity.price && <span><i className="bi bi-currency-dollar"></i> {item.activity.price}</span>}
                          </div>
                          {item.notes && (
                            <div className="activity-notes">
                              <strong>Your notes:</strong> {item.notes}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <i className="bi bi-plus-circle"></i>
                      <h4>No activities saved</h4>
                      <p>Browse and save activities to build your perfect trip.</p>
                    </div>
                  )}
                </div>
              </Tab.Pane>

              {/* <Tab.Pane eventKey="notes">
                <div className="notes-section">
                  <h3>Trip Notes</h3>
                  <div className="notes-content">
                    {trip?.notes || "No notes added yet. Add some personal notes about your trip planning."}
                  </div>
                </div>
              </Tab.Pane> */}
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>

      {/* Action Buttons */}
      <div className="trip-footer">
        <Button variant="outline-secondary" href="/planning" className="back-btn">
          <i className="bi bi-arrow-left"></i>
          Return to Planning
        </Button>
      </div>
    </div>
  )
}

export default CreatedTrip