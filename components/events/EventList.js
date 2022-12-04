import EventItem from "./EventItem";
import styles from "./eventList.module.css";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
