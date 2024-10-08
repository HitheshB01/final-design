// import AvailableJobs from "./components/AvailableJobs";
// import JobPortal from "./components/JobPortal";
// import LoginPage from "./components/LoginPage";
// import ProfilePage from "./components/ProfilePage";
// import SideNav from "./components/SideNav";

// export default function App() {
//   return (
//    <div>
//     <LoginPage/>
//     <JobPortal/>
//     <AvailableJobs/>
//     <ProfilePage/>
//     <SideNav/>
//    </div>
//   )
// }


import React from 'react';
import RoutingPage from './components/RoutingPage';
import LoginPage from './components/LoginPage';
import JobPortal from './components/JobPortal';



function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      <RoutingPage/>
      {/* <JobPortal/> */}
     
    </div>
  );
}

export default App;
