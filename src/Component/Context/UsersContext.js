import React, { createContext, useState, useMemo } from "react";
export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");
  // use useMemo to memoise the value and refresh only when one of these values change.
  const contextValues = useMemo(
    () => ({
      user,
      setUser,
      login,
      setLogin,
    }),
    [user, login]
  );
  return (
    <UsersContext.Provider value={contextValues}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
