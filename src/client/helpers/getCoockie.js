import { getCookie } from "react-use-cookie";

const verifyCoockieToken = () => {
  const token = getCookie("token");
  return token;
};

export default verifyCoockieToken;
