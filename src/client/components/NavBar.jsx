import { Link } from "react-router-dom";

export default function NavBar({ open, setNavOpen }) {
  return (
    <>
      <nav
        className={`bg-white w-full md:hidden absolute top-0 left-0 transition-spacing duration-700 ${
          !open ? "-ml-[110vw]" : "m-0"
        }`}
      >
        <ul className='flex flex-col items-start pl-4 py-4 gap-2 text-gray-900 font-medium ital'>
          <li onClick={() => setNavOpen(false)}>
            <Link to='/dashboard'>Inicio</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='empleados'>Ver empleados</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='nuevoempleado'>Ingresar nuevo empleado</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='asignarusuario'>Asignar usuario</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='modificarusuario'>Modificar usuario</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='nuevousuario'>Crear nuevo usuario</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to='salir'>Salir</Link>
          </li>
        </ul>
      </nav>
      <nav className='hidden md:block w-max min-h-[90vh] border-r'>
        <ul className='flex flex-col items-start p-4 gap-4 text-white font-medium ital lg:text-lg'>
          <li className='hover:text-red-500'>
            <Link to='/dashboard'>Inicio</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='empleados'>Ver empleados</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='nuevoempleado'>Ingresar nuevo empleado</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='asignarusuario'>Asignar usuario</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='modificarusuario'>Modificar usuario</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='nuevousuario'>Crear nuevo usuario</Link>
          </li>
          <li className='hover:text-red-500'>
            <Link to='salir'>Salir</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
