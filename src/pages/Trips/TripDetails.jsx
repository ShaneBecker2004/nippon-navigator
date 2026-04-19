import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { useAuth } from '../../contexts/authContext'
import "./tripdetails.css"
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar } from 'react-feather'
import { Nav, NavLink, Button, Tab, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { socket } from '../../socket'

const API = process.env.REACT_APP_API_URL;

const CreatedTrip = () => {
  const { tripId } = useParams()
  const [trip, setTrip] = useState(null)
  const [savedItems, setSavedItems] = useState([])
  const [dragItemIndex, setDragItemIndex] = useState(null)
  const [dragOverItemIndex, setDragOverItemIndex] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [deletingItemId, setDeletingItemId] = useState(null)
  const [isEditingDetails, setIsEditingDetails] = useState(false)
  const [editDescription, setEditDescription] = useState('')
  const [editArrivalLocation, setEditArrivalLocation] = useState('')
  const [editDepartureLocation, setEditDepartureLocation] = useState('')
  const [editPartySize, setEditPartySize] = useState('')
  const [savingDetails, setSavingDetails] = useState(false)
  const [detailsMessage, setDetailsMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser?.uid) return;

    socket.emit("joinUserRoom", currentUser.uid);
  }, [currentUser?.uid]);

  useEffect(() => {
    const handleTripUpdate = (updatedTrip) => {
      if (String(updatedTrip.id) === String(tripId)) {
        setTrip(updatedTrip);
        setSavedItems((updatedTrip.savedItems || []).slice().sort((a, b) => a.order - b.order));
      }
    };

    socket.on("tripUpdated", handleTripUpdate);

    return () => {
      socket.off("tripUpdated", handleTripUpdate);
    };
  }, [tripId]);

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

        const token = await user.getIdToken(true)

        // ✅ Fetch ONE trip instead of all
        const response = await fetch(`${API}/api/trips/${tripId}`, {
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
        setSavedItems((data.savedItems || []).slice().sort((a, b) => a.order - b.order))
        setEditDescription(data.description || '')
        setEditArrivalLocation(data.arrivalLocation || '')
        setEditDepartureLocation(data.departureLocation || '')
        setEditPartySize(data.partySize || '')

      } catch (err) {
        console.error('Error loading trip:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId, currentUser?.uid])

  const saveItemOrder = async (items) => {
    try {
      const auth = getAuth()
      const user = auth.currentUser
      if (!user) return

      const token = await user.getIdToken(true)
      await fetch(`${API}/api/trips/save-activity/order`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tripId,
          order: items.map((item, index) => ({
            id: item.id,
            order: index + 1,
          })),
        }),
      })
    } catch (err) {
      console.error('Failed to save itinerary order:', err)
    }
  }

  const handleDragStart = (index, e) => {
    setDragItemIndex(index)
    setIsDragging(true)
    
    // Create a custom drag image with just the activity info
    const dragElement = e.target.closest('.timeline-item')

    const title =
      dragElement?.querySelector('h4')?.textContent || 'Activity'

    const location =
      dragElement?.querySelector('.activity-location')?.textContent || ''
    
    // Create a clean drag preview
    const dragPreview = document.createElement('div')
    dragPreview.innerHTML = `
      <div style="
        background: white;
        border: 2px solid #007bff;
        border-radius: 8px;
        padding: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: inherit;
        max-width: 300px;
      ">
        <h5 style="margin: 0 0 4px 0; color: #333;">${title}</h5>
        <p style="margin: 0; color: #666; font-size: 14px;">${location}</p>
      </div>
    `
    dragPreview.style.position = 'absolute'
    dragPreview.style.top = '-1000px'
    document.body.appendChild(dragPreview)
    
    e.dataTransfer.setDragImage(dragPreview, 10, 10)
    
    // Remove the preview element after a short delay
    setTimeout(() => {
      document.body.removeChild(dragPreview)
    }, 0)
  }

  const handleDragEnter = (index) => {
    setDragOverItemIndex(index)
  }

  const handleDrop = async () => {
    if (dragItemIndex === null || dragOverItemIndex === null || dragItemIndex === dragOverItemIndex) {
      setDragItemIndex(null)
      setDragOverItemIndex(null)
      return
    }

    const updatedItems = [...savedItems]
    const [movedItem] = updatedItems.splice(dragItemIndex, 1)
    updatedItems.splice(dragOverItemIndex, 0, movedItem)

    setSavedItems(updatedItems)
    setDragItemIndex(null)
    setDragOverItemIndex(null)
    await saveItemOrder(updatedItems)
  }

  const handleSaveDetails = async () => {
    setSavingDetails(true)
    setDetailsMessage('')

    try {
      const auth = getAuth()
      const user = auth.currentUser
      if (!user) {
        throw new Error('You must be signed in to save trip details.')
      }

      const token = await user.getIdToken(true)
      const response = await fetch(`${API}/api/trips/${tripId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description: editDescription,
          arrivalLocation: editArrivalLocation,
          departureLocation: editDepartureLocation,
          partySize: editPartySize ? parseInt(editPartySize) : null,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to save trip details')
      }

      const updatedTrip = await response.json()
      setTrip(updatedTrip)
      setDetailsMessage('Trip details updated successfully.')
      setIsEditingDetails(false)
    } catch (err) {
      console.error('Failed to save trip details:', err)
      setDetailsMessage('Unable to save details. Please try again.')
    } finally {
      setSavingDetails(false)
    }
  }

  const handleCancelEditDetails = () => {
    setIsEditingDetails(false)
    setEditDescription(trip?.description || '')
    setEditArrivalLocation(trip?.arrivalLocation || '')
    setEditDepartureLocation(trip?.departureLocation || '')
    setEditPartySize(trip?.partySize || '')
    setDetailsMessage('')
  }

  const handleDeleteItem = async (savedActivityId) => {
    if (!window.confirm('Remove this activity from your trip?')) return

    setDeletingItemId(savedActivityId)
    try {
      const auth = getAuth()
      const user = auth.currentUser
      if (!user) throw new Error('You must be signed in to delete this item.')

      const token = await user.getIdToken(true)
      const response = await fetch(`${API}/api/trips/save-activity/${savedActivityId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to remove item')
      }

      setSavedItems((prev) => prev.filter((item) => item.id !== savedActivityId))
      setTrip((prev) => ({
        ...prev,
        savedItems: (prev.savedItems || []).filter((item) => item.id !== savedActivityId),
      }))
    } catch (err) {
      console.error('Failed to delete itinerary item:', err)
    } finally {
      setDeletingItemId(null)
    }
  }

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

      {/* HEADER */}
      <div className="trip-header">
        <div className="trip-header-content d-flex justify-content-between align-items-start">

          {/* LEFT SIDE */}
          <div className="trip-info">

            <h1 className="trip-title">
              {trip?.tripName || 'Trip Details'}
            </h1>

            <div className="trip-meta">
              <div className="meta-item">
                <Calendar size={18} />
                {trip?.startDate && trip?.endDate && (
                  <span>
                    {new Date(trip.startDate).toLocaleDateString()} -{" "}
                    {new Date(trip.endDate).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div className="meta-item">
                <span className="activity-count">
                  {savedItems.length} activities planned
                </span>
              </div>
            </div>

            {trip?.description && (
              <p className="trip-description"><i className="bi bi-journal-text"></i>
              {" "} {trip.description}</p>
            )}

            {(trip?.arrivalLocation || trip?.departureLocation) && (
              <div className="trip-locations">
                {trip?.arrivalLocation && (
                  <div className="location-item">
                    <i className="bi bi-airplane"> {" "} </i><strong>Arriving at:</strong> {trip.arrivalLocation}
                  </div>
                )}
                {trip?.departureLocation && (
                  <div className="location-item">
                    <i className="bi bi-airplane"> {" "} </i><strong>Departing from:</strong> {trip.departureLocation}
                  </div>
                )}
              </div>
            )}

            {trip?.partySize && (
              <div className="trip-people">
                <i className="bi bi-people-fill"></i> {" "}<strong>Travelers:</strong> {trip.partySize}
              </div>
            )}

            {isEditingDetails && (
              <div className="trip-edit-form mt-3">
                <Form.Group className="mb-3" controlId="editDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="editArrivalLocation">
                  <Form.Label>Arriving at</Form.Label>
                  <Form.Control
                    type="text"
                    value={editArrivalLocation}
                    onChange={(e) => setEditArrivalLocation(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="editDepartureLocation">
                  <Form.Label>Departing from</Form.Label>
                  <Form.Control
                    type="text"
                    value={editDepartureLocation}
                    onChange={(e) => setEditDepartureLocation(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="editPartySize">
                  <Form.Label>Number of Travelers</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={editPartySize}
                    onChange={(e) => setEditPartySize(e.target.value)}
                  />
                </Form.Group>

                {detailsMessage && (
                  <div className={`alert ${detailsMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                    {detailsMessage}
                  </div>
                )}

                <div className="d-flex gap-2">
                  <Button variant="primary" className='save-edit-btn' onClick={handleSaveDetails} disabled={savingDetails}>
                    {savingDetails ? 'Saving...' : 'Save Details'}
                  </Button>
                  <Button variant="secondary" className='cancel-btn' onClick={handleCancelEditDetails}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="trip-actions d-flex flex-column gap-2">
            <NavLink href="/explore">
              <Button className="add-activity-btn">
                <i className="bi bi-plus-circle"></i>
                Add Activity
              </Button>
            </NavLink>
            <Button className='edit-activity-btn' onClick={() => setIsEditingDetails((prev) => !prev)}>
              {isEditingDetails ? 'Close Edit' : 'Edit Details'}
            </Button>
            
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
                  Activities ({savedItems.length || 0})
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notes" className="tab-link">
                  <i className="bi bi-sticky"></i>
                  Notes
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="tab-content">
              <Tab.Pane eventKey="itinerary">
                <div className="itinerary-section">
                  <h3>Trip Itinerary</h3>
                  {savedItems.length > 0 ? (
                    <div className="itinerary-timeline">
                      {savedItems.map((item, index) => (
                        <div
                          key={item.id}
                          className={`timeline-item ${dragOverItemIndex === index ? 'drag-over' : ''} ${isDragging && dragItemIndex === index ? 'dragging' : ''}`}
                          draggable
                          onDragStart={(e) => handleDragStart(index, e)}
                          onDragEnter={() => handleDragEnter(index)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={handleDrop}
                          onDragEnd={() => {
                            setDragItemIndex(null)
                            setDragOverItemIndex(null)
                            setIsDragging(false)
                          }}
                        >
                          <div className="timeline-marker">
                            <span className="day-number">{index + 1}</span>
                          </div>
                          <div className="timeline-content">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h4>{item.activity.title || "Untitled Activity"}</h4>
                                <p className="activity-location">{item.activity.location || "No location"}</p>
                                {item.notes && <p className="activity-notes">{item.notes}</p>}
                              </div>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDeleteItem(item.id)}
                                disabled={deletingItemId === item.id}
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
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

                  {savedItems.length > 0 ? (
                    <div className="activities-grid">

                      {savedItems.map((item) => (
                        <div key={item.id}>

                          <Link
                            to={`/activity/${item.activity.slug}`}
                            className="activity-card-link"
                          >
                            <div className="activity-card">
                              <div className="activity-header">
                                <h4>{item.activity.title}</h4>

                                <span className="activity-type">
                                  {(item.activity.type || []).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(", ").replace(/_/g, " ")}
                                </span>
                              </div>

                              <div className="activity-meta">
                                <span>
                                  <i className="bi bi-geo-alt"></i>{" "}
                                  {item.activity.location}
                                </span>

                                {item.activity.price && (
                                  <span>
                                    <i className="bi bi-currency-yen"></i>{" "}
                                    {(() => {
                                      const price =
                                        typeof item.activity.price === "string"
                                          ? JSON.parse(item.activity.price)
                                          : item.activity.price;

                                      if (typeof price === "object" && price !== null) {
                                        const firstEntry = Object.entries(price)[0];

                                        if (firstEntry) {
                                          const [, value] = firstEntry;

                                          let displayPrice = "";

                                          if (
                                            typeof value === "object" &&
                                            value?.min &&
                                            value?.max
                                          ) {
                                            displayPrice = `${value.min.toLocaleString()} - ${value.max.toLocaleString()}`;
                                          } else if (typeof value === "number") {
                                            displayPrice = value.toLocaleString();
                                          } else {
                                            displayPrice = value;
                                          }

                                          return displayPrice;
                                        }
                                      }

                                      return price;
                                    })()}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>

                          {/* ✅ Notes must be INSIDE map */}
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

              <Tab.Pane eventKey="notes">
                <div className="notes-section">
                  <h3>Trip Notes</h3>
                  <div className="notes-content">
                    {trip?.notes || "No notes added yet. Add some personal notes about your trip planning."}
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>

      {/* Action Buttons */}
      <div className="trip-footer">
        <Button variant="outline-secondary" href="/planning" className="back-btn">
          <i className="bi bi-arrow-left"></i>
          {" "} Return to Planning
        </Button>
      </div>
    </div>
  )
}


export default CreatedTrip