export const getElectionStatus = (startDate: Date, endDate: Date): string => {
  const today = new Date();
  if (today < new Date(startDate)) return "Urmeaza";
  if (new Date(endDate) > today) return "Live";
  return "Terminat";
};
