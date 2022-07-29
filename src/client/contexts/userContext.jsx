import { createContext, useState, useEffect } from "react";
import getUser from "../helpers/getUser";
import verifyToken from "../helpers/verifyToken";
import verifyCoockieToken from "../helpers/getCoockie";
import setCookieToken from "../helpers/setCoockie";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [allReadySigned, setAllReadySigned] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState({});
  const navigate = useNavigate();

  const queryLogin = async (body) => {
    setIsLoading(true);
    const query = await getUser(body);
    if (!query.ok) {
      alert(query.msg);
      setAllReadySigned(false);
      setIsLoading(false);
      return;
    }
    setCookieToken(query.token, body.remember);
    setAllReadySigned(true);
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    const query = async () => {
      const token = verifyCoockieToken();
      if (token === "") {
        navigate("/", { replace: true });
        setAllReadySigned(false);
        setIsLoading(false);
        return;
      }
      const queryToken = await verifyToken(token);
      if (!queryToken.ok) {
        alert(queryToken.msg);
        navigate("/", { replace: true });
        setAllReadySigned(false);
        setIsLoading(false);
        return;
      }
      setQuery(queryToken);
      setAllReadySigned(true);
      setIsLoading(false);
    };
    query();
  }, [allReadySigned]);

  const value = { allReadySigned, queryLogin, isLoading, query };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
