import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Page404 from "../../Pages/Page404/Page404";
import Service from "../../Pages/Service/Service/Service";
import ServiceDetails from "../../Pages/Service/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Service></Service>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
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
