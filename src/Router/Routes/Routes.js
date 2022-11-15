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
import LoadingSpinner from "../../Pages/Shared/LoadingSpinner/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <LoadingSpinner>
            <Home></Home>
          </LoadingSpinner>
        ),
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
        element: (
          <LoadingSpinner>
            <Service></Service>
          </LoadingSpinner>
        ),
        loader: () => fetch("https://traveler-bhai-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: (
          <LoadingSpinner>
            <ServiceDetails></ServiceDetails>
          </LoadingSpinner>
        ),
        loader: ({ params }) => fetch(`https://traveler-bhai-server.vercel.app/services/${params.id}`),
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
