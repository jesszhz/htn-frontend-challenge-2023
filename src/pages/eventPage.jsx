import { useParams } from 'react-router-dom';
import { getEventTypeMap } from '../components/eventCard';
import { useEffect, useState } from 'react';
import Label from '../components/label';
import { Link } from 'react-router-dom';
import externalLinkIcon from '../assets/externalLinkIcon.png';
import Speaker from '../components/speaker';
import headshot from '../assets/dummyHeadshot.jpeg';
import { DateTime } from 'luxon';
import { gqlClient, fetchEventData } from '../shared/dataUtils';
import RelatedEventCard from '../components/relatedEventCard';
import Navbar from '../components/navbar';

export default function EventPage() {
  const { eventId } = useParams();
  console.log(eventId);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getEventData = async () => {
    try {
      const response = await fetchEventData(gqlClient, eventId);
      setData(response);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventData();
  }, [eventId]);

  if (!data) {
    return <div></div>;
  }

  const speakers = data.speakers.map((elem, index) => {
    return <Speaker key={index} photo={headshot} name={elem.name} />;
  });

  const startTime = DateTime.fromMillis(data.startTime);
  const endTime = DateTime.fromMillis(data.endTime);
  const dateString = startTime.toLocaleString({
    month: 'short',
    day: 'numeric'
  });
  const timeString = `${startTime.toLocaleString({
    hour: 'numeric',
    minute: '2-digit'
  })} - ${endTime.toLocaleString({
    hour: 'numeric',
    minute: '2-digit'
  })} (${startTime.offsetNameShort})`;

  const relatedEvents = data.relatedEvents.map((event, index) => {
    return <RelatedEventCard key={index} id={event} />;
  });

  console.log(relatedEvents);

  return (
    <>
      <Navbar />
      {!loading && (
        <div className="flex flex-col md:flex-row p-6 md:p-20">
          <div className="lg:pr-20">
            <h1 className="text-4xl lg:text-7xl flex-auto pb-8">{data.name}</h1>
            <div className="text-lg pb-8">
              <p className="font-bold">{dateString}</p>
              <p>{timeString}</p>
            </div>
            <p className="pb-8">{data.description}</p>
            <div className="flex items-center justify-between pb-8">
              <Label
                text={getEventTypeMap(data.eventType)}
                link="https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/"
              />

              <Link className="flex underline hover:no-underline text-lg">
                WATCH HERE <img className="w-5 h-5 ml-1 my-auto" src={externalLinkIcon} />
              </Link>
            </div>
            {speakers.length !== 0 && (
              <>
                <h2 className="text-2xl mb-4 ">Speakers</h2>
                <div className="mb-8">{speakers}</div>
              </>
            )}
          </div>
          {relatedEvents.length !== 0 && (
            <div className="flex-none w-80">
              <h3 className="text-2xl md:ml-4">Similar events</h3>
              {relatedEvents}
            </div>
          )}
        </div>
      )}
    </>
  );
}
