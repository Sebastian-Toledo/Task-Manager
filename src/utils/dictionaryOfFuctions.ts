const dictionary = {
  daysToLimit: function (limit: Date) {
    const currentDate = new Date();
    const limitDay = new Date(limit);
    const days = limitDay.getTime() - currentDate.getTime();
    return Math.round(days / 86400000);
  },
};

export default dictionary;
