import React, { useState } from "react";
import logo from '../assets/images/image.png';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Indian Air Force Logo"
            className="w-16 h-16 mx-auto"
          />
          <h1 className="text-2xl font-bold text-blue-900 mt-2">
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </h1>
        </div>

        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Additional Field for Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 text-sm mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <p className="text-center text-sm mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={handleToggle}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
