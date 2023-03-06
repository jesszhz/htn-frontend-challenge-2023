import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';
import { gqlClient, fetchEventData } from '../shared/dataUtils';
import relatedEventImage from '../assets/relatedEvent.png';
import { Link } from 'react-router-dom';

export default function RelatedEventCard(props) {
  const { id } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getEventData = async () => {
    try {
      const response = await fetchEventData(gqlClient, id);
      setData(response);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  if (!data) {
    return;
  }

  const name = data.name;
  const startTime = DateTime.fromMillis(data.startTime);
  const startTimeString = `${startTime.toLocaleString({
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })} @ ${startTime.toLocaleString({
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  })}`;

  return (
    !loading && (
      <Link to={`/event/${id}`}>
        <div className="w-full pb-4 rounded-xl p-4 my-4 hover-outline flex items-center">
          <img className="rounded-xl" width="90" height="90" src={relatedEventImage}></img>
          <div className="ml-4">
            <p className="pb-2 mb-2">{name}</p>
            <p className="text-sm text-blue-30">{startTimeString}</p>
          </div>
        </div>
      </Link>
    )
  );
}
