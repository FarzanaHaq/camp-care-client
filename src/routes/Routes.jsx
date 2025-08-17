import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Available from "../components/Available/Available";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddCamp from "../components/AddCamp/AddCamp";
import Details from "../components/Details/Details";
import Profile from "../components/Profile/Profile";
import { ManageCamps } from "../components/ManageCamps/ManageCamps";
import { ManageRegistered } from "../components/ManageRegistered/ManageRegistered";
import { Analytics } from "../components/Analytics/Analytics";
import { MyCamps } from "../components/MyCamps/MyCamps";
import { PaymentHistory } from "../components/PaymentHistory/PaymentHistory";
import { UpdateProfile } from "../components/UpdateProfile/UpdateProfile";
import { UpdateCamp } from "../components/UpdateCamp/UpdateCamp";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
      { path: "/avail", element: <Available /> },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`https://camp-server-lake.vercel.app/camp-details/${params.id}`),
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
          fetch(`https://camp-server-lake.vercel.app/camp-details/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCamp />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
