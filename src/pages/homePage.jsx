import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import EventGallery from '../components/eventGallery';
import { useSelector } from 'react-redux';
import { fetchAllEvents, gqlClient } from '../shared/dataUtils';

export default function HomePage() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getEvents = async () => {
    try {
      const data = await fetchAllEvents(gqlClient);
      // Okay I didn't figure out to filter by only private events in the graphql request end so lets do this in the frontend
      let filteredEvents = data;
      if (!isAuthenticated) {
        filteredEvents = filteredEvents.filter((event) => event.permission === 'public');
        filteredEvents.sort((a, b) => a.start_time - b.start_time);
      }
      setEventData(filteredEvents);
    } catch (err) {
      console.log(err);
      setEventData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch the event data
    getEvents();
  }, []);

  return (
    <>
      <Navbar />
      {!loading && <EventGallery events={eventData} />}
    </>
  );
}
