import type { FC } from "react";
import styles from "./styles.module.css";
import AddEventModal from "../AddEventModal";

interface DayCellProps {
  date: Date;
}

const DayCell: FC<DayCellProps> = ({ date }) => {
  return (
    <td className={styles.dayCell}>
      <AddEventModal date={date} />
      <p className={styles.dateLabel}>{date.getDate()}</p>
    </td>
  );
};

export default DayCell;
