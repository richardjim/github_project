import { createBrowserRouter } from "react-router-dom";
import NotFound from "../views/NotFound";
import Home from "../views/Home";
import Jobs from "../views/jobs";
import About from "../views/About";
import Navbar from "../component/navbar";
import Contact from "../views/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Jobs",
        element: <Jobs />,
      },
      {
        path: "/Contact-Us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
