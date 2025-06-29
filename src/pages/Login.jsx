import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
      <h2 className='text-3xl  text-center font-bold text-green-500'>Login</h2>
      <form action="">
        <div className='mb-4'>
        <label htmlFor="" className='block mb-1 font-semibold text-sm'>Email</label>
        <input type="email" name="" 
        placeholder='Enter your email...'
        
        id=""className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 '/>

        </div>
        <div className='mb-4'>
        <label htmlFor="" className='block mb-1 font-semibold text-sm'>
        Password</label>
        <input type="password" name="" 
        placeholder='Enter your password...'
        
        id=""className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 '/>

        </div>
        <button className='w-full bg-green-500 text-white py-3
        rounded-lg font-semibold hover:bg-green-700'>Login</button>

      </form>
      
    </div>
      
    </div>
  );
};

export default Login;
