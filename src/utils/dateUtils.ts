import dayjs from "dayjs";

const formatDateAsDatetimeString = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD hh:mm");
};

export { formatDateAsDatetimeString };
