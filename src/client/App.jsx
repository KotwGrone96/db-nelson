import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import { UserContextProvider } from "./contexts/userContext";
const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
