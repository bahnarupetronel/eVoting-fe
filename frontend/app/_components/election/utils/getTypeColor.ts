export const getTypeColor = (type: string): string => {
  switch (type) {
    case "Referendum":
      return "green";
    case "Locale":
      return "blue";
    case "Prezidentiale":
      return "yellow";
    case "Parlamentare":
      return "red";
    case "Parlamentul european":
      return "cian";
    default:
      return "";
  }
};
