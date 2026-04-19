import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useAuth } from "../../contexts/authContext";
import { useLocation, Link } from "react-router-dom";
import { CardContent, CardHeader, CardTitle } from "../Trips/TripCard";
import { getAuth } from "firebase/auth";
import { socket } from "../../socket";
import "./planning.css";
import plannerimg from "../../assets/images/breadcrumb/planner-breadcrumb.jpg";

const API = process.env.REACT_APP_API_URL;

const Planning = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const location = useLocation();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingTripId, setDeletingTripId] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handleTripUpdate = (updatedTrip) => {
      setTrips(prev => 
        prev.map(t => t.id === updatedTrip.id ? updatedTrip : t)
      );
    };

    socket.on("tripUpdated", handleTripUpdate);

    return () => socket.off("tripUpdated", handleTripUpdate);
  }, []);

  // 🔥 FETCH TRIPS
  const fetchTrips = async () => {
    try {
      setLoading(true);

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.log("No Firebase user found");
        setLoading(false);
        return;
      }

      const token = await user.getIdToken();

      const response = await fetch(`${API}/api/trips`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to fetch trips:", errorText);
        throw new Error("Failed to fetch trips");
      }

      const data = await response.json();

      console.log("Trips fetched:", data);
      setTrips(data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🚀 initial load (wait for auth)
  useEffect(() => {
    if (userLoggedIn) {
      fetchTrips();
    } else {
      setLoading(false);
    }
  }, [userLoggedIn]);

  // 🔄 refresh when returning from New Trip page
  useEffect(() => {
    if (location.state?.refresh) {
      fetchTrips();
    }
  }, [location]);

  const handleDeleteTrip = async (tripId) => {
    if (!window.confirm('Delete this trip? This will remove all saved activities.')) return;

    setDeletingTripId(tripId);
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        console.error('No authenticated user available to delete trip.');
        return;
      }

      const token = await user.getIdToken();
      const response = await fetch(`${API}/api/trips/${tripId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to delete trip');
      }

      setTrips((prev) => prev.filter((trip) => trip.id !== tripId));
    } catch (error) {
      console.error('Error deleting trip:', error);
    } finally {
      setDeletingTripId(null);
    }
  };

  // ✅ SORTED TRIPS
  const sortedTrips = [...trips].sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  // ✅ TODAY (normalized to midnight)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // ✅ UPCOMING TRIPS
  const upcomingTrips = sortedTrips.filter(
    (trip) => new Date(trip.startDate) >= today
  );

  return (
    <>
      <Breadcrumbs title="Itinerary Planner" pagename="Planner" bgImage={plannerimg}/>

      <div className="trip-dashboard">
        <div className="dashboard-topbar">
          <h1 className="dashboard-title">Dashboard</h1>

          <Link to="new-trip">
            <Button className="new-trip-button">New Trip</Button>
          </Link>
        </div>

        <Card className="trip-welcome-card">
          <CardHeader>
            <CardTitle>Welcome back, {currentUser?.displayName || "User"}</CardTitle>
          </CardHeader>

          <CardContent>
            {loading ? (
              <p>Loading your trips...</p>
            ) : trips.length === 0 ? (
              <p>
                You haven't created any trips yet. Click "New Trip" to get started!
              </p>
            ) : (
              <div className="dashboard-summary">
                <div className="stat-card">
                  <span className="stat-label">Total Trips</span>
                  <span className="stat-value">{trips.length}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Upcoming Trips</span>
                  <span className="stat-value">{upcomingTrips.length}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Last Updated</span>
                  <span className="stat-value">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <section className="recent-trips-section">
          <h2>Your Recent Trips</h2>

          {trips.length === 0 ? (
            <Card className="no-trips-card">
              <CardContent className="recent-trips-content">
                <h3 className="no-trips-message">No trips yet.</h3>
                <p className="no-trips-message">
                  Start planning your next adventure by creating your first trip!
                </p>
                <Link to="new-trip">
                  <Button className="new-trip-button">Create Trip</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="recent-trips-list">
              {sortedTrips.slice(0, 6).map((trip) => (
                <Link key={trip.id} className="recent-trip-card" to={`trip-details/${trip.id}`}>
                  <Card className="recent-trip-button">
                    <CardHeader className="d-flex justify-content-between align-items-start">
                      <CardTitle className="recent-button">{trip.tripName}</CardTitle>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          handleDeleteTrip(trip.id)
                        }}
                        disabled={deletingTripId === trip.id}
                      >
                        {deletingTripId === trip.id ? 'Deleting...' : 'Delete'}
                      </Button>
                    </CardHeader>

                    <CardContent>
                      <p>{trip.description || "No description"}</p>
                      {trip.startDate && trip.endDate && (
                        <p>
                          {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                        </p>
                      )}
                      <p>{trip.savedItems?.length || 0} activities saved</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Planning;