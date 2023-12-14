export const getStatusColor = (status: string): string => {
  if (status === "Urmeaza") return "purple";
  if (status === "Terminat") return "brown";
  return "pink"; //live
};
