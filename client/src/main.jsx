import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProfile from './pages/UserProfile.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feed from './pages/Feed.jsx';
import Search from './pages/Search.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Login from './pages/login.jsx';
import EditProfile from './pages/editProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <App />
    </>
  },
  {
    path: "/register",
    element: <Register />

  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/edit-profile/:id",
    element: <EditProfile />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />
  },
  {
    path: "home",
    element: 
    <>
    <div className='flex flex-row'>
    <Navbar />
    </div>
    </>,
    children: [
      {
        path: "",
        element: <Feed />,
      },

      {
        path: "search",
        element: <Search />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
