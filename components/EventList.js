import EventItem from './EventItem'
export default function EventList(props) {
  const { items } = props

  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  )
}
