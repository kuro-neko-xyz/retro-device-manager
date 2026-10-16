import type { FC } from "react";
import DayCell from "../DayCell";

interface WeekCellProps {
  weekStart: Date;
}

const WeekCell: FC<WeekCellProps> = ({ weekStart }) => {
  const randomDateDayOfTheWeek = weekStart.getDay();
  const initialDate = new Date(weekStart);
  initialDate.setDate(initialDate.getDate() - randomDateDayOfTheWeek);

  return (
    <tr>
      {Array.from({ length: 7 }, (_, i) => {
        const tempDate = new Date(initialDate);
        tempDate.setDate(tempDate.getDate() + i);
        return <DayCell key={tempDate.toDateString()} date={tempDate} />;
      })}
    </tr>
  );
};

export default WeekCell;
