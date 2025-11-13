import React, { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  const [message, setMessage] = useState();
  const handleGoogleSignIn =()=>{

  }
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-gray-700 font-bold text-sm mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
            {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shodow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold text-sm mb-2"
              htmlFor="Password"
            >
              Password
            </label>
            <input
            {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shodow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">
              Please Enter valid email and password
            </p>
          )}
          <div className="mt-4">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none  ">
              login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          hasn't an account?{" "}
          <Link to="/register" className=" hover:text-blue-700 text-blue-500">
            {" "}
            please Register
          </Link>
        </p>

        {/**google */}
        <div className="mt-4">
          <button onClick={handleGoogleSignIn} className="w-full flex flrx-wrap items-center justify-between bg-secondary focus:oultline-none hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded">
            <FaGoogle className="mr-2" />
            sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          2025 BookStore. All rights reversed
        </p>
      </div>
    </div>
  );
};

export default Login;
