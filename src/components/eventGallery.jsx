import EventCard from './eventCard';

export default function EventGallery(props) {
  const events = props.events;
  const eventCards = events.map((event) => <EventCard key={event.id} {...event} />);

  return (
    <div className="mx-2 md:mx-8 my-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {eventCards}
      </div>
    </div>
  );
}
