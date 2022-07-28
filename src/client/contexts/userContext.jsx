import { createContext, useState, useEffect } from "react";
import getUser from "../helpers/getUser";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [allReadySigned, setAllReadySigned] = useState(false);

  const queryLogin = async (body) => {
    const query = await getUser(body);
    if (!query.ok) {
      setAllReadySigned(false);
      return query.msg;
    }
    setAllReadySigned(true);
    return query;
  };

  const value = { allReadySigned, queryLogin };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
