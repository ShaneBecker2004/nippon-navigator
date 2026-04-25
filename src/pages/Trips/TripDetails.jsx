import React, { useState, useEffect, useRef, useCallback } from 'react'
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
  const [isEditingDetails, setIsEditingDetails] = useState(false)
  const [editDescription, setEditDescription] = useState('')
  const [editArrivalLocation, setEditArrivalLocation] = useState('')
  const [editDepartureLocation, setEditDepartureLocation] = useState('')
  const [editPartySize, setEditPartySize] = useState('')
  const [savingDetails, setSavingDetails] = useState(false)
  const [detailsMessage, setDetailsMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [tripNotes, setTripNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);

  const [rates, setRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [convertedTotal, setConvertedTotal] = useState(0);

  const isSyncingRef = useRef(false);
  const lastSavedRef = useRef([]);
  const [saveStatus, setSaveStatus] = useState("saved"); 

  const { currentUser } = useAuth();

  const SYMBOLS = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "C$",
    AUD: "A$",
    KRW: "₩",
    SGD: "S$",
  };

  useEffect(() => {
    if (!currentUser?.uid) return;

    socket.emit("joinUserRoom", currentUser.uid);
  }, [currentUser?.uid]);

  useEffect(() => {
    const handleTripUpdate = (updatedTrip) => {
      if (String(updatedTrip.id) !== String(tripId)) return;
      if (isSyncingRef.current) return;

      const serverItems = updatedTrip.savedItems || [];

      setTrip(updatedTrip);

      setSavedItems((prev) => {
        return sortItems(
          prev.map((localItem) => {
            const match = serverItems.find((s) => s.id === localItem.id);
            return match ? { ...localItem, ...match } : localItem;
          })
        );
      });

      lastSavedRef.current = serverItems;
      setSaveStatus("saved");
    };

    socket.on("tripUpdated", handleTripUpdate);

    return () => {
      socket.off("tripUpdated", handleTripUpdate);
    };
  }, [tripId]);

  const calculateTotalJPY = useCallback(() => {
    return savedItems.reduce((total, item) => {
      const yenValue = extractJPYPrice(item.activity?.price);
      return total + yenValue;
    }, 0);
  }, [savedItems]);

  useEffect(() => {

    const fetchRates = async () => {
      try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/JPY');
        const data = await res.json();

        const filteredRates = {};

        const CORE_CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "KRW", "SGD"];

        CORE_CURRENCIES.forEach((currency) => {
          filteredRates[currency] = 1 / data.rates[currency];
        });

        setRates(filteredRates);
      } catch (err) {
        console.error("Error fetching rates:", err);
      }
    };

    fetchRates();
  }, []);

  useEffect(() => {
  if (!rates[selectedCurrency]) return;

    const totalJPY = calculateTotalJPY();
    setConvertedTotal(totalJPY / rates[selectedCurrency]);
  }, [rates, selectedCurrency, savedItems, calculateTotalJPY]);

  const extractJPYPrice = (price) => {
    if (!price) return 0;

    if (typeof price === "string") {
      try {
        price = JSON.parse(price);
      } catch {
        return 0;
      }
    }

    if (typeof price === "object") {
      const first = Object.values(price)[0];

      if (typeof first === "number") return first;
      if (first?.min) return first.min;
    }

    if (typeof price === "number") return price;

    return 0;
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      if ((a.day || 1) !== (b.day || 1)) {
        return (a.day || 1) - (b.day || 1);
      }
      return (a.time || "99:99").localeCompare(b.time || "99:99");
    });
  };

  useEffect(() => {
    if (!rates[selectedCurrency]) return;

    const totalJPY = calculateTotalJPY();
    setConvertedTotal(totalJPY / rates[selectedCurrency]);
  }, [rates, selectedCurrency, calculateTotalJPY]);

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
          setSavedItems(sortItems(data.savedItems|| []))
          setEditDescription(data.description || '')
          setEditArrivalLocation(data.arrivalLocation || '')
          setEditDepartureLocation(data.departureLocation || '')
          setEditPartySize(data.partySize || '')
          setTripNotes(data.notes || '')

      } catch (err) {
        console.error('Error loading trip:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId, currentUser?.uid])

  const handleSaveNotes = async () => {
    setSavingNotes(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken(true);

      const res = await fetch(`${API}/api/trips/${tripId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          notes: tripNotes,
        }),
      });

      if (!res.ok) throw new Error("Failed to save notes");

      const updated = await res.json();
      setTrip(updated);

    } catch (err) {
      console.error("Error saving notes:", err);
    } finally {
      setSavingNotes(false);
    }
  };

  const saveItemOrder = useCallback(async (items) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken(true);

      const payload = items.map((item, index) => ({
        id: item.id,
        day: item.day ?? 1,
        time: item.time || null,
        order: index + 1,
      }));

      await fetch(`${API}/api/trips/save-activity/order`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tripId,
          order: payload,
        }),
      });

    } catch (err) {
      console.error("Failed to save itinerary order:", err);
    }
  }, [tripId]);

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
    }
  }

  const getTotalCost = () => {
    return savedItems.reduce((total, item) => {
      const yenValue = extractJPYPrice(item.activity?.price);
      return total + yenValue;
    }, 0);
  };

   const getTripDays = () => {
    if (!trip?.startDate || !trip?.endDate) return [];

    const days = [];
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);

    let current = new Date(start);
    let dayCount = 1;

    while (current <= end) {
      days.push({
        day: dayCount,
        date: new Date(current),
        label: `Day ${dayCount}`,
        customLabel: "",
        note: ""
      });

      current.setDate(current.getDate() + 1);
      dayCount++;
    }

    return days;
  }

  const updateItem = (id, updates) => {
    isSyncingRef.current = true;

    setSavedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    );

    setSaveStatus("unsaved");

    setTimeout(() => {
      isSyncingRef.current = false;
    }, 0);
  };

  useEffect(() => {
    if (isSyncingRef.current) return;
    if (saveStatus !== "unsaved") return;

    const timeout = setTimeout(async () => {
      setSaveStatus("saving");

      try {
        await saveItemOrder(savedItems);

        lastSavedRef.current = JSON.parse(JSON.stringify(savedItems));
        setSaveStatus("saved");
      } catch (err) {
        console.error(err);
        setSaveStatus("unsaved"); // retry state
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [savedItems, saveStatus, saveItemOrder]);

  const handleSaveItinerary = async () => {
    try {
      setSaveStatus("saving");

      await saveItemOrder(savedItems);

      lastSavedRef.current = JSON.parse(JSON.stringify(savedItems));
      setSaveStatus("saved");

    } catch (err) {
      console.error("Manual save failed:", err);
      setSaveStatus("unsaved");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (saveStatus !== "unsaved") return;

      e.preventDefault();
      e.returnValue = ""; // required for browser prompt
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [saveStatus]);

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
              <Nav.Item>
                <Nav.Link eventKey="expenses" className="tab-link">
                  <i className="bi bi-currency-dollar"></i>
                  Expenses
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="tab-content">
              <Tab.Pane eventKey="itinerary">
                <div className="itinerary-section">
                  <h3 className='fw-bold'>Trip Itinerary</h3>
                  <div className={`save-status ${saveStatus} mb-3`}>
                    {saveStatus === "saved" && "All changes saved"}
                    {saveStatus === "saving" && "Saving..."}
                    {saveStatus === "unsaved" && "Unsaved changes"}
                  </div>
                  <Button
                    className="save-itinerary-btn"
                    onClick={handleSaveItinerary}
                    disabled={saveStatus === "saving"}
                  >
                    {saveStatus === "saving" ? "Saving..." : "Save Itinerary"}
                  </Button>

                  {savedItems.length > 0 ? (
                    <div className="itinerary-rows">
                      {getTripDays().map((dayObj) => {
                        const itemsForDay = savedItems.filter(
                          (item) => (item.day ?? 1) === dayObj.day
                        );

                        return (
                          <div 
                            key={dayObj.day} 
                            className='day-row'
                          >

                          <div className='day-row-header'>
                            <h5>
                              {dayObj.label}
                              <br />
                              <small>{dayObj.date.toLocaleDateString()}</small>
                            </h5>
                          </div>

                            {itemsForDay.length > 0 ? (
                              itemsForDay.map((item, index) => (
                                <div 
                                  key={item.id} 
                                  className='day-row-item'
                                >
                                  <div className='activity-left'>
                                    <h6>{item.activity.title || "Untitled Activity"}</h6>
                                    <p className='activity-location'>
                                      {item.activity.location || "No location"}
                                    </p>
                                  </div>

                                <div className='activity-right'>
                                  <Form.Select
                                    value={item.day ?? 1}
                                    onChange={(e) =>
                                      updateItem(item.id, { day: parseInt(e.target.value) })
                                    }
                                  >
                                    {getTripDays().map((d) => (
                                      <option key={d.day} value={d.day}>
                                        {d.label}
                                      </option>
                                    ))}
                                  </Form.Select>

                                  <input
                                    type='time'
                                    value={item.time || ""}
                                    onChange={(e) => 
                                      updateItem(item.id, { time: e.target.value })
                                    }
                                  />

                                    <Button
                                      variant='outline-danger'
                                      size="sm"
                                      onClick={() => handleDeleteItem(item.id)}
                                    >
                                      <i className='bi bi-trash'></i>
                                    </Button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className='empty-day'>No activities</p>
                            )}

                          </div>
                        );
                      })}

                    </div>
                  ) : (
                    <div className='empty-state'>
                      <i className='bi bi-calendar-x'></i>
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
                                <h4>{item.activity.title || "Untitled Activity"}</h4>

                                <span className="activity-type">
                                  {(item.activity.category || []).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(", ").replace(/_/g, " ")}
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
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder='Write notes about your trip...'
                    value={tripNotes}
                    onChange={(e) => setTripNotes(e.target.value)}
                  />

                  <Button 
                    className='save-button mt-2'
                    onClick={handleSaveNotes}
                    disabled={savingNotes}
                  >
                    {savingNotes ? "Saving..." : "Save Notes"}
                  </Button>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="expenses">
                <div className="expenses-section">
                  <h3 className='mb-4 fw-bold'>Budget</h3>

                  <div className='currency-select mb-3'>
                    <label>Select Currency</label>
                    <select
                      className='form-control mt-2'
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                      <option value="KRW">KRW</option>
                      <option value="SGD">SGD</option>
                    </select>
                  </div>

                  <div className="budget-summary">
                    <h4>Total Estimated Cost:</h4>

                    <p className='total-price'>
                      ¥{getTotalCost().toLocaleString()}
                    </p>

                    <p className='converted-total'>
                      {selectedCurrency}:{" "}{SYMBOLS[selectedCurrency]}
                      {convertedTotal.toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </div>

                  <div className='budget-breakdown'>
                    {savedItems.map((item) => {
                      const yenValue = extractJPYPrice(item.activity?.price);
                      const rate = rates[selectedCurrency];

                      return (
                        <div key={item.id} className='budget-item'>
                          <span>{item.activity.title || "Untitled Activity"}</span>

                          <span>
                            {yenValue > 0 ? `¥${yenValue.toLocaleString()}` : "-"}

                            <br />

                            <small>
                              {rate
                                ? `${SYMBOLS[selectedCurrency]} ${(yenValue / rate).toLocaleString(undefined, {
                                  maximumFractionDigits: 2
                                })}`
                                : "-"}
                            </small>
                          </span>
                        </div>
                      );
                    })}
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