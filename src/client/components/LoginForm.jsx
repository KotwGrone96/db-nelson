import { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function LoginForm() {
  const context = useContext(UserContext);
  const { queryLogin } = context;

  const initialFormFata = {
    user: "",
    pass: "",
    remember: false,
  };
  const [formData, setFormData] = useState(initialFormFata);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      const remember = e.target.checked;
      setFormData({ ...formData, remember });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryLogin(formData);
    setFormData(initialFormFata);
  };

  return (
    <>
      <form className='bg-white p-4 rounded-xl' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label
            htmlFor='user'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Usuario
          </label>
          <input
            type='text'
            id='user'
            name='user'
            autoComplete='username'
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='user01'
            required
            value={formData.user}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='pass'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Contraseña
          </label>
          <input
            type='password'
            id='pass'
            name='pass'
            autoComplete='current-password'
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
            placeholder='******'
            value={formData.pass}
          />
        </div>
        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              defaultValue=''
              className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
              onChange={handleChange}
            />
          </div>
          <label
            htmlFor='remember'
            className='ml-2 text-sm font-medium text-gray-900'
          >
            Recordar 30 días
          </label>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Ingresar
        </button>
      </form>
    </>
  );
}
