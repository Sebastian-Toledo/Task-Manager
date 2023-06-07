import { formatDateAsDatetimeString } from "./dateUtils";

const dictionary = {
  daysToLimit: function (limit: Date) {
    const currentDate = new Date();
    const limitDay = new Date(limit);
    const days = limitDay.getTime() - currentDate.getTime();
    return Math.round(days / 86400000);
  },
  changeDeadline: function (deadline: string) {
    const changeDeadline = new Date(deadline);
    changeDeadline.setHours(23);
    changeDeadline.setMinutes(59);
    return formatDateAsDatetimeString(changeDeadline);
  },
};

export default dictionary;
