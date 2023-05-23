import React, { useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const Notify = () => {
    toast('Registered Successfully!');
  }

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      Notify();
      emailRef.current.value = ''
      usernameRef.current.value = ''
      passwordRef.current.value = ''
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="">
          <Link to={"/"} className="text-4xl mr-5">
            home
          </Link>
          <Link to={"/login"} className="text-4xl mr-5">
            login
          </Link>

          {!cookies.access_token ? (
            <Link to={"/register"} className="text-4xl ml-5">
              register
            </Link>
          ) : (
            <button className="mr-5" onClick={logout}>
              logout
            </button>
          )}
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-10 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-9 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Register
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onRegister}>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={emailRef}
                    className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="username"
                    ref={usernameRef}
                    className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
                    placeholder="Username"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    id="password"
                    ref={passwordRef}
                    className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center bg-black text-white"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <br />
                  <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </Link>
                </p>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
