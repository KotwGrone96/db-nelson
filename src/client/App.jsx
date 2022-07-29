import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { UserContextProvider } from "./contexts/userContext";
import Home from "./views/Home";
import Empleados from "./views/Empleados";
import NuevoEmpleado from "./views/NuevoEmpleado";
import AsignarUsuario from "./views/AsignarUsuario";
import ModificarUsuario from "./views/ModificarUsuario";
import NuevoUsuario from "./views/NuevoUsuario";
import Salir from "./views/Salir";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='empleados' element={<Empleados />} />
          <Route path='nuevoempleado' element={<NuevoEmpleado />} />
          <Route path='asignarusuario' element={<AsignarUsuario />} />
          <Route path='modificarusuario' element={<ModificarUsuario />} />
          <Route path='nuevousuario' element={<NuevoUsuario />} />
          <Route path='salir' element={<Salir />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
