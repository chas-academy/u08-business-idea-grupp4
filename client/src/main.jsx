import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import UserProfile from './pages/userProfile.jsx'
import Navbar from './components/Navbar.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      {/* LÄGG APP HÄR? */}
    </>
  },
  {
    path: "userprofile",
    element: 
    <>
    <Navbar />
    <UserProfile />
    </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
