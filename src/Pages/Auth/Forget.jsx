import React from 'react';

const ForgetPasswordForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between ">
    <div className="flex items-center justify-center my-6">
      <img src="/logo.svg" alt="" className="w-[100px]" />
    </div>
      <div className="bg-white p-8  w-full max-w-md">

        {/* Title and Description */}
        <h2 className="text-2xl font-semibold text-center mb-4">Forget password?</h2>
        <p className="text-center text-gray-600 mb-6">
          No problem. Enter your account email below and we'll send you a link to reset your password.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Cancel Link */}
        <div className="text-center mt-4">
          <a href="#" className="text-black hover:underline text-sm">
            Cancel
          </a>
        </div>

        {/* Terms */}
        
      </div>

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

export default ForgetPasswordForm;