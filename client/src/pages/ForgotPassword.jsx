import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight text-center text-gray-900">
            RESET PASSWORD
          </h1>
          <p className="font-medium leading-tight text-center text-gray-900">
            Enter your email address and we will send you instructions to reset your password.
          </p>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border-2 border-gray-900 rounded-3xl"
                placeholder="Email"
              />
            </div>
            <button
              type="submit"
              className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-3xl focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Reset Password
            </button>
            <div className="flex justify-between">
              <Link to="/login" className="underline">Login</Link>
              <Link to="/register" className="underline">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
