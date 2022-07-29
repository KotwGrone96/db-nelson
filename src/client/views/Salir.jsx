import { setCookie } from "react-use-cookie";
import Spinner from "../components/Spinner";
import { useState } from "react";

export default function Salir() {
  const [isLoading, setIsLoading] = useState(false);

  const logOut = () => {
    setIsLoading(true);
    setCookie("token", "", {
      days: 1,
      path: "/",
      SameSite: "Lax",
      Secure: true,
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  return (
    <>
      <h2 className='text-center text-lg font-medium md:text-xl lg:text-2xl'>
        ¿Está seguro que desea salir?
      </h2>
      <div className='w-full pt-10'>
        {isLoading ? (
          <div className='w-full flex justify-center items-center flex-col'>
            <Spinner />
            <h3 className='font-medium pt-4'>Saliendo</h3>
          </div>
        ) : (
          <button
            className='m-auto block bg-red-500 p-2 rounded-xl hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 transition-colors'
            onClick={logOut}
          >
            <span className='font-bold'>Cerrar Sesión</span>
          </button>
        )}
      </div>
    </>
  );
}
