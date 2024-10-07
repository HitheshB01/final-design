// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideNav = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold">Placement Portal</h1>
//       </div>
//       <nav className="mt-10 flex flex-col">
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">dadfwdfw</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">advsvsvsvsd</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">dvsvsfv</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">sfsfbdfb</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">sfbfbdb</li>
//         <Link to="/" className="text-xl py-2 px-6 hover:bg-gray-700">Home</Link>
//         <Link to="/jobs" className="text-xl py-2 px-6 hover:bg-gray-700">Jobs</Link>
//         <Link to="/applied" className="text-xl py-2 px-6 hover:bg-gray-700">Applied</Link>
//         <Link to="/resume" className="text-xl py-2 px-6 hover:bg-gray-700">Resume</Link>
//         <Link to="/profile" className="text-xl py-2 px-6 hover:bg-gray-700">Profile</Link>
//       </nav>
//     </div>
//   );
// }

// export default SideNav;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaFileAlt, FaUserAlt, FaClipboardList } from 'react-icons/fa';
import logo from '../images/Logo.png'

const SideNav = () => {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-green-500 to-teal-600 text-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
      <img
              src={logo} // Add your logo here
              alt="TAGES Logo"
              className="h-40 mx-auto mix-blend-multiply"
            />      </div>

      {/* Nav Links */}
      <nav className=" flex flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaHome className="mr-4" />
          Home
        </Link>

        <Link
          to="/jobs"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaBriefcase className="mr-4" />
          Jobs
        </Link>

        <Link
          to="/applied"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaClipboardList className="mr-4" />
          Applied
        </Link>

        <Link
          to="/resume"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaFileAlt className="mr-4" />
          Resume
        </Link>

        <Link
          to="/profile"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaUserAlt className="mr-4" />
          Profile
        </Link>
      </nav>

      {/* Profile Avatar at Bottom */}
      <div className="mt-auto p-6 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile Avatar"
            className="rounded-full mb-3"
          />
          <p className="text-sm">John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
