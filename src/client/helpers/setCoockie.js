import { setCookie } from "react-use-cookie";

const setCookieToken = (token, remember) => {
  if (remember) {
    setCookie("token", token, {
      days: 30,
      path: "/",
      SameSite: "Lax",
      Secure: true,
    });
    return;
  }
  setCookie("token", token, {
    days: 1,
    path: "/",
    SameSite: "Lax",
    Secure: true,
  });
};

export default setCookieToken;
