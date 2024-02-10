import { createContext, useContext, useState } from "react";

export const AppStateContext = createContext({ state: null, setState: null });
import { RegisterFormState } from "@/_interfaces/registerFormState.model";

export function FormProvider({ children }) {
  const [state, setState] = useState({});
  const value: RegisterFormState = { state, setState };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useRegisterFormState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
