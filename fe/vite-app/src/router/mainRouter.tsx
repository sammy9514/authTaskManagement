import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../common/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Sign_up } from "../pages/SignUp";
import Login from "../pages/Login";
import { DashBoard } from "../pages/DashBoard";
import { PrivateRoute } from "./PrivateRouter";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Sign_up />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
