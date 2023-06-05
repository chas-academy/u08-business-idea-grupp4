import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
            RESET PASSWORD
          </h1>
          <p className=" font-bold leading-tight tracking-tight text-gray-900 text-center">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <button
              type="submit"
              className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center bg-black text-white"
            >
              Create an account
            </button>
            <Link to="/login" className="text-left underline">
              Login
            </Link>
            <span className="mx-20"></span>
            <Link to="/register" className="text-right underline">
              Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
