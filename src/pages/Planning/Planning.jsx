import React, { useState, useEffect } from "react";
import { Button, NavLink, Card } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useAuth } from "../../contexts/authContext";
import { useLocation } from "react-router-dom";
import { CardContent, CardHeader, CardTitle } from "../Trips/TripCard";
import { getAuth } from "firebase/auth";
import "./planning.css";
import plannerimg from "../../assets/images/breadcrumb/planner-breadcrumb.jpg";

const Planning = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const location = useLocation();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

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

      const response = await fetch("http://localhost:5001/api/trips", {
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

          <NavLink href="new-trip">
            <Button className="new-trip-button">New Trip</Button>
          </NavLink>
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
                <NavLink href="new-trip">
                  <Button className="new-trip-button">Create Trip</Button>
                </NavLink>
              </CardContent>
            </Card>
          ) : (
            <div className="recent-trips-list">
              {sortedTrips.slice(0, 6).map((trip) => (
                <NavLink key={trip.id} className="recent-trip-card" href={`trip-details/${trip.id}`}>
                  <Card className="recent-trip-button">
                    <CardHeader>
                      <CardTitle className="recent-button">{trip.tripName}</CardTitle>
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
                </NavLink>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Planning;