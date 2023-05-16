import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProfile from './pages/userProfile.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "userprofile",
    element: 
    <>
    <UserProfile />
    </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
  <RouterProvider router={router} />
)
