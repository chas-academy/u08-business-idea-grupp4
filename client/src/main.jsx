import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import UserProfile from "./pages/userProfile.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import Search from "./pages/Search.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>{/* LÄGG APP HÄR? */}</>,
  },
  {
    path: "home",
    element: (
      <>
        <div className="flex flex-row">
          <Navbar />
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: ":userId",
        element: <UserProfile />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
