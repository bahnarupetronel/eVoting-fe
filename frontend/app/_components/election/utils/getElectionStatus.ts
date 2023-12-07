export const getElectionStatus = (startDate: Date, endDate: Date): string => {
  const today = new Date();
  if (today < new Date(startDate)) return "Upcoming";
  if (new Date(endDate) > today) return "Live";
  return "Finished";
};
