import React from "react";

const Login = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>

        <form>
          <div>
            <label
              className="block text-gray-700 font-bold text-sm mb-2"
              htmlFor="eamil"
            ></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shodow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
