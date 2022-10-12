import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  //filterData is an array with two elements
  const [filteredYear, filteredMonth] = filterData;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth; //+ can convert a string to a number

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  console.log("aa = ", filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found !</p>;
  }

  // filteredEvents.forEach((event) => router.push(`/events/${event.id}`));

  return (
    <div>
      <h1>This is filtered event</h1>
    </div>
  );
}

export default FilteredEventsPage;
