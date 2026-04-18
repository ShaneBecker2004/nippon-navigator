import React, { useState } from 'react';
import "./trips.css";
import { Button, Alert, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "./TripCard";
import { getAuth } from 'firebase/auth';
import { Calendar, MapPin, Clock, CheckCircle, AlertCircle } from 'react-feather';

const NewTrip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tripName: "",
    description: "",
    startDate: "",
    endDate: "",
    arrivalLocation: "",
    departureLocation: "",
    partySize: 1,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    // Clear general error
    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.tripName.trim()) {
      newErrors.tripName = "Trip name is required";
    } else if (formData.tripName.trim().length < 3) {
      newErrors.tripName = "Trip name must be at least 3 characters";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    } else {
      const startDate = new Date(formData.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate < today) {
        newErrors.startDate = "Start date cannot be in the past";
      }
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    }

    if (formData.startDate && formData.endDate) {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);

      if (startDate > endDate) {
        newErrors.endDate = "End date must be after start date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setSubmitError("You must be logged in to create a trip");
      return;
    }

    try {
      setLoading(true);
      setSubmitError("");

      const token = await user.getIdToken();

      const res = await fetch("http://localhost:5001/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tripName: formData.tripName.trim(),
          description: formData.description.trim(),
          startDate: formData.startDate,
          endDate: formData.endDate,
          arrivalLocation: formData.arrivalLocation.trim(),
          departureLocation: formData.departureLocation.trim(),
          partySize: formData.partySize,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create trip");
      }

      const data = await res.json();
      console.log("Trip created:", data);

      // Show success message
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        tripName: "",
        description: "",
        startDate: "",
        endDate: "",
        arrivalLocation: "",
        departureLocation: "",
        partySize: 1,
      });

      // Navigate after a short delay to show success message
      setTimeout(() => {
        navigate("/planning");
      }, 1500);

    } catch (err) {
      console.error("Error creating trip:", err);
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getMinStartDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMinEndDate = () => {
    return formData.startDate || getMinStartDate();
  };

  return (
    <div className='new-trip-container'>
      <div className="new-trip-card">
        <Card className="trip-form-card">
          <CardHeader className="form-header">
            <div>
              <CardTitle>Create New Trip</CardTitle>
              <p className="header-subtitle">Plan your next adventure</p>
            </div>
            <div className="header-icon">
              <MapPin size={24} />
            </div>
          </CardHeader>

          <CardContent className="form-content">
            {submitError && (
              <Alert variant="danger" className="form-alert">
                <AlertCircle size={18} />
                <span>{submitError}</span>
              </Alert>
            )}

            {submitSuccess && (
              <Alert variant="success" className="form-alert">
                <CheckCircle size={18} />
                <span>Trip created successfully! Redirecting...</span>
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              {/* TRIP NAME */}
              <Form.Group className="form-group">
                <Form.Label className="form-label">
                  <span className="label-icon"><i className="bi bi-tag-fill"></i></span>
                  Trip Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  name="tripName"
                  value={formData.tripName}
                  onChange={handleInputChange}
                  placeholder="e.g., Tokyo Adventure 2026"
                  className={errors.tripName ? "is-invalid" : ""}
                  disabled={loading || submitSuccess}
                />
                <Form.Text className="text-muted">
                  Give your trip a memorable name. 
                </Form.Text>
                {errors.tripName && (
                  <div className="invalid-feedback d-block">{errors.tripName}</div>
                )}
              </Form.Group>

              {/* DESCRIPTION */}
              <Form.Group className="form-group">
                <Form.Label className="form-label">
                  <span className="label-icon"><i className="bi bi-journal-text"></i></span>
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about your trip plans..."
                  disabled={loading || submitSuccess}
                />
                <Form.Text className="text-muted">
                  Optional: Add details about your trip, such as destinations, activities, or travel companions.
                </Form.Text>
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label>
                  <i className="bi bi-people-fill me-2"></i>
                  Number of Travelers
                </Form.Label>

                <Form.Control
                  type="number"
                  min="1"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleInputChange}
                  disabled={loading || submitSuccess}
                />

                <Form.Text className="text-muted">
                  How many people are going on this trip?
                </Form.Text>
              </Form.Group>

              {/* DATES */}
              <div className="dates-section">
                <h4 className="section-title">
                  <Calendar size={18} />
                  Travel Dates *
                </h4>

                <div className="date-grid">
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">
                      <span className="label-icon"><i className="bi bi-calendar3"></i></span>
                      Start Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      min={getMinStartDate()}
                      className={errors.startDate ? "is-invalid" : ""}
                      disabled={loading || submitSuccess}
                    />
                    {errors.startDate && (
                      <div className="invalid-feedback d-block">{errors.startDate}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">
                      <span className="label-icon"><i className="bi bi-calendar3"></i></span>
                      End Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      min={getMinEndDate()}
                      className={errors.endDate ? "is-invalid" : ""}
                      disabled={loading || submitSuccess}
                    />
                    {errors.endDate && (
                      <div className="invalid-feedback d-block">{errors.endDate}</div>
                    )}
                  </Form.Group>
                </div>
                <Form.Group className="form-group">
                  <Form.Label>
                    <i className="bi bi-airplane-engines me-2"></i>
                    Arrival Location
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="arrivalLocation"
                    value={formData.arrivalLocation}
                    onChange={handleInputChange}
                    placeholder="e.g., Tokyo (Narita Airport or City)"
                    disabled={loading || submitSuccess}
                  />

                  <Form.Text className="text-muted">
                    City or airport where your trip starts
                  </Form.Text>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>
                    <i className="bi bi-airplane me-2"></i>
                    Departure Location
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="departureLocation"
                    value={formData.departureLocation}
                    onChange={handleInputChange}
                    placeholder="e.g., Tokyo or Osaka Airport"
                    disabled={loading || submitSuccess}
                  />

                  <Form.Text className="text-muted">
                    City or airport where your trip ends
                  </Form.Text>
                </Form.Group>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="form-actions">
                <Button
                  type="submit"
                  className="submit-button"
                  disabled={loading || submitSuccess}
                  size="lg"
                >
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                      Creating Trip...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <CheckCircle size={18} className="me-2" />
                      Trip Created!
                    </>
                  ) : (
                    <>
                      <MapPin size={18} className="me-2" />
                      Create Trip
                    </>
                  )}
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>

        <div className="form-footer">
          <Button
            variant="outline-secondary"
            onClick={() => navigate("/planning")}
            disabled={loading}
            className="cancel-button"
          >
            <span>←</span> Back to Planning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewTrip;