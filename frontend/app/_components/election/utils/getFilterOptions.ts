export type option = {
  placeholder: string;
  value: string;
};

export type filter = {
  status: string;
  type: string;
};

export const statusFilterOptions: Array<option> = [
  { value: "", placeholder: "Selectati statusul" },
  { value: "Terminat", placeholder: "Terminat" },
  { value: "Live", placeholder: "Live" },
  { value: "Urmeaza", placeholder: "Urmeaza" },
];

export const typeFilterOptions: Array<option> = [
  { value: "", placeholder: "Selectati tipul" },
  { value: "Locale", placeholder: "Locale" },
  { value: "Prezidentiale", placeholder: "Prezidentiale" },
  { value: "Parlamentare", placeholder: "Parlamentare" },
  { value: "Parlamentul european", placeholder: "Parlamentul european" },
];
