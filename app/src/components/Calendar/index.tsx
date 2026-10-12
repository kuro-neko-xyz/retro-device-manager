import { useState } from "react";
import styles from "./styles.module.css";

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

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>
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
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Calendar;
