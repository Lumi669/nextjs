import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

import EventSearch from "../../components/events/event-search";

const AllEventsPage = () => {
  const events = getAllEvents();

  function findEventHandler(year, month) {
    console.log("year from index = ", year);
    console.log("month from index = ", month);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
