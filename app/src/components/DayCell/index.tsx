import type { FC } from "react";
import styles from "./styles.module.css";

interface DayCellProps {
  date: Date;
}

const DayCell: FC<DayCellProps> = ({ date }) => {
  return (
    <td className={styles.dayCell}>
      <p>{date.toDateString()}</p>
    </td>
  );
};

export default DayCell;
