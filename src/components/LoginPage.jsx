import React from 'react';
import img from '../images/login_img.png'
import logo from '../images/Logo.png'



function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex-1 bg-gradient-to-b from-green-400 to-blue-500 flex flex-col justify-center items-center">
        {/* 3D Illustration */}
        <div>
          <img
            src={img}// You need to place the 3D image here
            alt="Working illustration"
            className="h-64 mix-blend-multiply	"
          />
          {/* <Working/> */}
        </div>
        <div className="text-white text-center mt-6">
          <h1 className="text-2xl font-semibold">Ready to find your perfect career match?</h1>
          <p className="text-lg">Login and discover!</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <img
              src={logo} // Add your logo here
              alt="TAGES Logo"
              className=" h-40"
            />
          </div>

          {/* Login Form */}
          <h2 className="text-2xl font-bold ml-4 mb-6">LOGIN</h2>
          <form className="space-y-4">
            {/* Mobile Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile number</label>
              <input
                type="text"
                placeholder="4565544445"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                {/* Password Eye Icon */}
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  👁️
                </span>
              </div>
            </div>

            {/* Keep Me Logged In */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-gray-600">Keep me logged in</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </form>

{/*           
          <div className="my-6 text-center text-gray-500">or</div>

          Google Login Button
          <button
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md text-gray-600 hover:bg-gray-50"
          >
            <img src="path-to-google-icon" alt="Google Icon" className="h-5 mr-2" />
            Login with Google
          </button>

          Signup Link
          <p className="mt-4 text-center text-sm">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Signup</a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
