import React, { createContext, useState, ReactNode } from "react";

type AppContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const AppContext = createContext<AppContextType>({
  token: null,
  setToken: () => {},
});

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const updateToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setToken(newToken);
  };

  return (
    <AppContext.Provider value={{ token, setToken: updateToken }}>
      {children}
    </AppContext.Provider>
  );
};
