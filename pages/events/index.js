import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
