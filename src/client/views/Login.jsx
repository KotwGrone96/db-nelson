import LoginForm from "../components/LoginForm";

export default function Login() {
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
