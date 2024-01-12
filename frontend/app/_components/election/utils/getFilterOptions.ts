import { option } from "../../../_interfaces/filter.model";

export const statusFilterOptions: Array<option> = [
  { value: "", placeholder: "Selectati statusul" },
  { value: "Terminat", placeholder: "Terminat" },
  { value: "Live", placeholder: "Live" },
  { value: "Urmeaza", placeholder: "Urmeaza" },
];

export const typeFilterOptions: Array<option> = [
  { value: "", placeholder: "Selectati tipul" },
  { value: "Referendum", placeholder: "Referendum" },
  { value: "Locale", placeholder: "Locale" },
  { value: "Prezidentiale", placeholder: "Prezidentiale" },
  { value: "Parlamentare", placeholder: "Parlamentare" },
  { value: "Parlamentul european", placeholder: "Parlamentul european" },
];
