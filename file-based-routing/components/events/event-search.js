import Button from "../ui/button";

import classes from "./event-search.module.css";
import { useRef } from "react";

function EventSearch(props) {
  const yearElement = useRef();
  const monthElement = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearElement.current?.value;
    const selectedMonth = monthElement.current?.value;
    console.log("year = ", year);
    console.log("month = ", month);

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearElement}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthElement}>
            <option value="1">January</option>
            <option value="2">Feburay</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find event</Button>
    </form>
  );
}

export default EventSearch;
