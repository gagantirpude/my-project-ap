import React, { useState } from "react";

function CalendarComponent({ onChangeMonth }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
    onChangeMonth(selectedYear, parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
    onChangeMonth(parseInt(event.target.value), selectedMonth);
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <div className="month-selector">
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
        <select value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index} value={selectedYear - 5 + index}>
              {selectedYear - 5 + index}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CalendarComponent;
