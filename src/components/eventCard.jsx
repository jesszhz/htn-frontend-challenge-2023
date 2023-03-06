import Label from './label';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { eventImageMap } from '../assets';

const eventTypeMap = {
  tech_talk: 'Tech Talk',
  workshop: 'Workshop',
  activity: 'Activity'
};

export const getEventTypeMap = (eventType) => {
  return eventTypeMap[eventType];
};

export default function EventCard(props) {
  const { name, event_type: eventType, description, id } = props;
  const startTime = DateTime.fromMillis(props.start_time);

  const getTimeString = (time) => {
    return `${time.toLocaleString({
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })} @ ${time.toLocaleString({
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    })}`;
  };

  return (
    <Link to={`/event/${id}`}>
      <div className="w-full h-full hover-outline bg-inherit rounded-xl p-4">
        <img className="rounded-xl mb-5" src={eventImageMap[name]}></img>
        <p className=" text-xs uppercase">{getTimeString(startTime)}</p>
        <p className="text-xl my-3 font-semibold">{name}</p>
        <p className="mb-3 line-clamp-2">{description}</p>
        <div>
          <Label
            text={getEventTypeMap(eventType)}
            link={
              'https://hackthenorth.notion.site/hackthenorth/Hack-the-North-2023-Frontend-Developer-Challenge-bcbe4a5a275f4620bd9339072e5698b4'
            }
          />
        </div>
      </div>
    </Link>
  );
}
