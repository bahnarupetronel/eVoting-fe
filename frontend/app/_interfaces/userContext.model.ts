import { Dispatch, SetStateAction } from "react";

export interface UserContextModel {
  user: Object;
  setUser: Dispatch<SetStateAction<Object>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
