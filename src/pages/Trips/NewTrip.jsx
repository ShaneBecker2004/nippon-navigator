import React, { useState } from 'react';
import "./trips.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "./TripCard";
import { getAuth } from 'firebase/auth';

const NewTrip = () => {
  const navigate = useNavigate();

  // 🧠 form state
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("You must be logged in");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }

    try {
      setLoading(true);

      // 🔑 Get Firebase token
      const token = await user.getIdToken();

      // 📡 Send to backend
      const res = await fetch("http://localhost:5001/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tripName,
          description,
          startDate,
          endDate,
        }),
      });

      // ❗ Handle backend errors
      if (!res.ok) {
        const err = await res.json();
        console.error("Backend error:", err);
        alert("Failed to create trip");
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log("Trip created:", data);

      // 🚀 Redirect after success
      navigate("/planning");

    } catch (err) {
      console.error("Error creating trip:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='new-trip-container'>
      <div className="new-trip-card">

        <Card>
          <CardHeader>
            <CardTitle>New Trip</CardTitle>
          </CardHeader>

          <CardContent>

            <form className="mb-3" onSubmit={handleSubmit}>

              {/* TITLE */}
              <div className="mb-3">
                <label className='trip-title'>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mb-3">
                <label className='trip-title'>Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* DATES */}
              <div className='date-grid'>

                <div className="mb-3">
                  <label className='trip-title'>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className='trip-title'>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>

              </div>

              <Button type='submit' className='submit-button' disabled={loading}>
                {loading ? "Creating..." : "Create Trip"}
              </Button>

            </form>

          </CardContent>
        </Card>

        <Button
          className="cancel-button"
          variant="secondary"
          onClick={() => navigate("/planning")}
        >
          Cancel
        </Button>

      </div>
    </div>
  );
};

export default NewTrip;