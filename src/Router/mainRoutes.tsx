import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Components/Blocks/Layouts";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import ChildrenState from "../Components/ReUse/ChildrenState";
import Register from "../Pages/Register";
import SignUp from "../Register/SignUp";
import SignIn from "../Register/SignIn";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage count="" />,
      },
      {
        index: true,
        path: "/about",
        element: <AboutPage counted="" />,
      },
      {
        index: true,
        path: "/register",
        element: <Register>
          <SignUp/>
        </Register>,
      },
      {
        index: true,
        path: "/sign-in",
        element: <Register>
          <SignIn/>
        </Register>,
      },
      {
        index: true,
        path: "/contact",
        element: (
          <ChildrenState>
            <ContactPage />,
          </ChildrenState>
        ),
      },
    ],
  },
]);
