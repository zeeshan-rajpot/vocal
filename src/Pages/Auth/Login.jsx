import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between ">
      <div className="flex items-center justify-center mt-6">
        <img src="/logo.svg" alt="" className="w-[100px]" />
      </div>
      <div className="bg-white p-8 rounded-lg  w-full max-w-md">
        {/* Logo and Title */}

        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="you@awesome.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="supersecret"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2  hover:bg-black transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <Link to="/forget-password" className="text-black underline hover:no-underline">
            Forget password?
          </Link>
          <Link to="/Join" className=" text-black">
            Don't have an account?{" "}
            <span className="mr-1 text-black underline hover:no-underline">Join</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign-ins */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Sign in with Facebook
          </button>

          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_Logo_2013.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.114 2.52.334 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.94.67 1.9v2.82c0 .27.18.58.69.Pred48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            Sign in with Apple
          </button>
        </div>

      
      </div>
        {/* Terms */}
        <p className="text-center text-xs text-gray-500 mb-6">
          By continuing, you agree to our{' '}
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-black hover:underline">
            Terms of Use
          </a>
        </p>
    </div>
  );
};

export default SignInForm;
