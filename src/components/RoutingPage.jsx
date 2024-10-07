import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./JobsPage";
import AppliedPage from "./AppliedPage";
import ResumePage from "./ResumePage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import JobPortal from "./JobPortal";

// Configure routes with SideNav as the parent (Layout)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // SideNav and Outlet
    children: [
      { path: "/", element: <HomePage /> }, // Child route for HomePage
      { path: "jobs", element: <JobsPage /> },
    //   { path: "jobdescription", element: <JobPortal /> },

      // Child route for JobsPage
      { path: "applied", element: <AppliedPage /> }, // Child route for AppliedPage
      { path: "resume", element: <ResumePage /> }, // Child route for ResumePage
      { path: "profile", element: <ProfilePage /> }, // Child route for ProfilePage
    ],
  },
]);

const RoutingPage = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default RoutingPage;
