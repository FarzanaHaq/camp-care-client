import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Available from "../pages/Available";
import { AboutPage } from "../pages/AboutPage";
import AddCamp from "../dashboard/AddCamp";
import Details from "../components/Details";
import Profile from "../dashboard/Profile";
import { Analytics } from "../dashboard/Analytics";
import { MyCamps } from "../dashboard/MyCamps";
import { PaymentHistory } from "../dashboard/PaymentHistory";
import { UpdateProfile } from "../dashboard/UpdateProfile";
import { UpdateCamp } from "../dashboard/UpdateCamp";
import { ManageCamps } from "../dashboard/ManageCamps";
import { ManageRegistered } from "../dashboard/ManageRegistered";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/avail",
        element: <Available />,
      },
      { path: "/about", element: <AboutPage></AboutPage> },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(
            `https://camp-server-lake.vercel.app/camp-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-camp",
        element: (
          <PrivateRoute>
            <AddCamp />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <ManageCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <PrivateRoute>
            <ManageRegistered />
          </PrivateRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        ),
      },
      {
        path: "my-camps",
        element: (
          <PrivateRoute>
            <MyCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-camp/:id",
        loader: ({ params }) =>
          fetch(
            `https://camp-server-lake.vercel.app/camp-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateCamp />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
