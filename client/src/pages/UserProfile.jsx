import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('')
  const [cookies, , removeCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      let userID = window.localStorage.getItem("userID");
  
      if (!userID) {
      navigate('/login')
      }
  
      try {
        const response = await axios.get(`http://localhost:3001/auth/profile/${userID}`, {
          headers: {
            Authorization: `Bearer ${cookies.access_token}`,
          },
        });
  
        console.log(response.data);
        if (response.data && response.data.user) {
          setUsername(response.data.user.username);
          setEmail(response.data.user.email);
          setBio(response.data.user?.bio)
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserProfile();
  }, [cookies.access_token, navigate]);
  
  const logout = () => {
    removeCookies("access_token");
    window.localStorage.removeItem("userID");
    navigate("/register");
  };

  useEffect(() => {
    const storedUsername = window.localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("username", username);
  }, [username]);

  let profileUrl = window.localStorage.getItem('userID')

  return (
    <section className="bg-gray-50">
      <div className="">
        <Link to={"/"} className="text-4xl mr-5">
          home
        </Link>
        

        {!cookies.access_token ? (
          <Link to={"/login"} className="text-4xl ml-5">
            login
          </Link>
        ) : (
          <button className="mr-l5" onClick={logout}>
            logout
          </button>
        )}
      </div>
      <div className="flex justify-center">
            <div className="flex justify-between w-7/12 pt-20 pb-10">
                <div>
                    <img className="h-48 w-48 rounded-full" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Profile Picture"/>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-16 pt-2">
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">47</h4>
                            <p>recipes</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">500</h4>
                            <p>followers</p>
                        </div>
                        <div className="flex flex-col text-center">
                            <h4 className="text-2xl">100</h4>
                            <p>following</p>
                        </div>
                    </div>
                    <Link to={`/edit-profile/${profileUrl}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit profile
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col w-7/12 space-y-3">
                <h5 className="text-xs font-bold">{username}</h5>
                <p>{bio} <br /> {email} </p>
            </div>
        </div>
        
        <div className="flex justify-center pt-20">
            <div className="flex flex-col text-center w-7/12 space-y-3">
                <h1>CATEGORIES</h1>

                <div className="flex flex-row justify-center space-x-5">
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Cake</p>
                    </Link>
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Pasta</p>
                    </Link>
                    <Link to="" className="flex items-center space-x-3 text-gray-700 bg-gray-200 py-2 px-6 rounded-md font-medium hover:bg-gray-300 focus:bg-gray-200 focus:shadow-outline">
                        <p>Drinks</p>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Profile;
