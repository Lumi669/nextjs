import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    console.log("year from index = ", year);
    console.log("month from index = ", month);
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
