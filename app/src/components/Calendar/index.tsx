import { useState } from "react";
import styles from "./styles.module.css";
import WeekCell from "../WeekCell";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTableHeaderButtonClick = (change: 1 | -1) => {
    setSelectedDate((prev) => {
      const currentMonth = prev.getMonth();
      const newDate = new Date(prev);
      newDate.setMonth(currentMonth + change);
      return newDate;
    });
  };

  const generateWeeks = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);

    const weekStart = new Date(year, month, 1 - firstOfMonth.getDay());

    const weeks = [];
    while (weekStart <= lastOfMonth) {
      const start = new Date(weekStart);
      weeks.push(<WeekCell key={start.toDateString()} weekStart={start} />);
      weekStart.setDate(weekStart.getDate() + 7);
    }

    return weeks;
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={7}>
              <div className={styles.tableHeaderContent}>
                <button
                  className={styles.tableHeaderButton}
                  onClick={() => handleTableHeaderButtonClick(-1)}
                  type="button"
                >
                  {"<"}
                </button>
                <h2 className={styles.tableHeaderLabel}>
                  {selectedDate.toLocaleDateString([], {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                <button
                  className={styles.tableHeaderButton}
                  onClick={() => handleTableHeaderButtonClick(1)}
                  type="button"
                >
                  {">"}
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
          </tr>
          {generateWeeks()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
