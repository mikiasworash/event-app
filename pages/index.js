import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'

export default function HomePage(props) {
  return (
    <div>
      <div>
        <EventList items={props.events} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
  }
}
