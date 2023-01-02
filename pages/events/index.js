import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

export default function EventsPage(props) {
  const router = useRouter()
  const events = props.events

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const allEvents = await getAllEvents()
  return {
    props: { events: allEvents },
    revalidate: 120,
  }
}
