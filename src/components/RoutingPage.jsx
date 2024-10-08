import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./JobsPage";
import AppliedPage from "./AppliedPage";
import ResumePage from "./ResumePage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";  
import JobPortal from "./JobPortal";

// Configure routes with SideNav as the parent (Layout)

const router = createBrowserRouter([
  {
    path: "/layout",
    element: <Layout />, // Protected route, only accessible if logged in
    children: [
      { path: "layout", element: <HomePage /> }, // Home page
      { path: "jobs", element: <JobsPage /> }, // Jobs page
      { path: "applied", element: <AppliedPage /> }, // Applied jobs page
      { path: "resume", element: <ResumePage /> }, // Resume page
      { path: "profile", element: <ProfilePage /> }, // Profile page
    ],
  },
  {
    path: "/",
    element: <LoginPage />,
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
