import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();

  console.log("aaa = ", router.query);
  return (
    <div>
      <h1>This is filtered event</h1>
    </div>
  );
}

export default FilteredEventsPage;
