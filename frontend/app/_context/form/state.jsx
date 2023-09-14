import { createContext, useContext, useState } from "react";

export const AppStateContext = createContext([{}]);

import rolesEnum from "../../_shared/rolesEnum";

export function FormProvider({ children }) {
  const value = useState([{ roles: [rolesEnum.ROLE_USER] }]);
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
