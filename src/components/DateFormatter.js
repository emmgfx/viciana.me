import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

const DateFormatter = ({ className, dateObject }) => {
  const date = parseISO(dateObject.toISOString().split("T")[0]);
  return (
    <time className={className} dateTime={date.toString()}>
      {format(date, "d LLLL yyyy", { locale: es })}
    </time>
  );
};

export default DateFormatter;
