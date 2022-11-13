import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Page404 from "../../Pages/Page404/Page404";
import Service from "../../Pages/Service/Service";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
