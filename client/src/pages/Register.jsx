import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useForm } from 'react-hook-form'

const Register = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem(userID);
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        email,
        username,
        password,
      });
      alert("Registration successful!");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <section className="bg-gray-50">
      <div className="">
<Link to={"/"} className="text-4xl mr-5">
  home
</Link>
<Link to={"/login"} className="text-4xl mr-5">
  logino
</Link>

{!cookies.access_token ? (
  <Link to={"/auth"} className="text-4xl ml-5">
    register
  </Link>
) : (
  <button className="mr-l5" onClick={logout}>
    
    logout
  </button>
)}
</div>
  <div className="flex flex-col items-center justify-center px-8 py-10 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-9 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
                  Register
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onRegister}>
                  <div>
                      
                      <input type="email" name="email" id="email" value={email}onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" placeholder="Email"  />
                  </div>
               
                  <div>
                    
                      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" placeholder="Username"  />
                  </div>
               
                  <div>
                  
                      <input type="password" id="Password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"   />
                  </div>
               
                  <button type="submit" className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3lx text-sm px-5 py-2.5 text-center bg-black text-white">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  );
};

export default Register;
