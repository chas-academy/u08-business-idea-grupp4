import { useState } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const [cookies, , removeCookies] = useCookies(["access_token"]);
  const userID = window.localStorage.getItem('userID');


  const Notify = () => {
    return toast('Profile Updated!');
  };

  const handleUpdateProfile = () => {
    axios.put(`http://localhost:3001/auth/profile/${userID}`, { bio, username, password, profilePicture }, {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`
      }
    })
    .then((response) => {
      console.log(response.data.message);
      Notify();
      setUsername('');
      setBio('');
      setPassword('');

    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
            EDIT PROFILE
          </h1>
          <div>
            <img className="sm:h-48 sm:w-48 w-32 h-32 rounded-full object-cover" src={profilePicture} alt="Profile Picture" />
          </div>
          <div>
            <input type="text" id="profilePicture" placeholder="URL..." value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" />
          </div>
          <div>
            <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" />
          </div>
          <div>
            <input type="text" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" />
          </div>
          <div>
            <textarea type="text" id="bio" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5" />
          </div>
          <button onClick={handleUpdateProfile} className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center bg-black text-white">SAVE</button>
          
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
