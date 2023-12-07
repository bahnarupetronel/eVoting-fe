export const getStatusColor = (status: string): string => {
  if (status === "Upcoming") return "purple";
  if (status === "Finished") return "brown";
  return "pink"; //live
};
