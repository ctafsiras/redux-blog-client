import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";
import CreatePost from "../pages/Dashboard/CreatePost";
import AllPosts from "../pages/Dashboard/AllPosts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "reading-history",
        element: <ReadingHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-posts",
        element: <AllPosts />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

export default routes;
