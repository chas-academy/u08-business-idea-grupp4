import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserProfile from "./pages/Profile/UserProfile.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import Search from "./pages/Search.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import CategoryFeed from "./components/ProfileFeed/CategoryFeed.jsx";
import PostFeed from "./components/ProfileFeed/PostFeed.jsx";
import SavedFeed from "./components/ProfileFeed/SavedFeed.jsx";
import Login from "./components/Login.jsx";
import CreateCategory from "./pages/CreateCategory.jsx";
import EditProfile from "./pages/editProfile.jsx";
import Post from "./pages/post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "home",
    element: (
      <>
        <div className="xl:flex xl:flex-row">
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
        path: "profile/:username",
        element: <UserProfile />,
        children: [
          {
            path: "",
            element: <PostFeed />,
          },
          {
            path: "category",
            element: <CategoryFeed />,
          },
          {
            path: "saved",
            element: <SavedFeed />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
      {
        path: "create-category",
        element: <CreateCategory />,
      },
      {
        path: "edit-profile/:id",
        element: <EditProfile />,
      },
      {
        path: "Post",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
