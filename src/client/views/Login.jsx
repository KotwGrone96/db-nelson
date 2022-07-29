import LoginForm from "../components/LoginForm";
import { UserContext } from "../contexts/userContext";
import { useContext, useEffect } from "react";
import Spinner from "./../components/Spinner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const context = useContext(UserContext);
  const { isLoading, allReadySigned } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (!allReadySigned) return;
    navigate("/dashboard", { replace: true });
  }, [allReadySigned]);

  if (isLoading) {
    return (
      <div className='w-full min-h-screen bg-gray-900'>
        <h1 className='text-center p-4 font-bold italic underline underline-offset-2 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          NelDev
        </h1>
        <div className='w-full flex justify-center pt-10'>
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <h1 className='text-center p-4 font-bold italic underline underline-offset-2 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        NelDev
      </h1>
      <div className='w-full p-4 max-w-xl m-auto mt-4 lg:mt-6 xl:mt-8'>
        <LoginForm />
      </div>
    </div>
  );
}
