import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import React from 'react'

const App = () => {
  let profileUrl = window.localStorage.getItem("userID")

  return (
    <div>
       <Link to={`/profile/${profileUrl}`}>Profile</Link>
       <ToastContainer />
    </div>
  )
}

export default App

