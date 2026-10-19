import type { FC } from "react";
import styles from "./styles.module.css";

interface DayCellProps {
  date: Date;
}

const DayCell: FC<DayCellProps> = ({ date }) => {
  return (
    <td className={styles.dayCell}>
      <p className={styles.dateLabel}>{date.getDate()}</p>
    </td>
  );
};

export default DayCell;
