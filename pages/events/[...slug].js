import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'
import { Fragment } from 'react'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

export default function FilterdEventsPage(props) {
  const router = useRouter()

  // const filteredData = router.query.slug

  const filteredEvents = props.events

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found in this date!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(props.date.year, props.date.month - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const filteredData = params.slug

  const numYear = +filteredData[0]
  const numMonth = +filteredData[1]

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      notFound: true,
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  }
}
