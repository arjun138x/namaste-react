import React, { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img src="bg-img.jpg" alt="bg-img" />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <form className="rounded-lg  w-1/4 absolute p-4 bg-black opacity-80">
          <h1 className="text-white text-start font-bold text-2xl my-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="my-2 p-2 rounded-sm w-full bg-gray-600"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="my-2 p-2 rounded-sm w-full bg-gray-600"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="my-2 p-2 rounded-sm w-full  bg-gray-600"
            type="password"
            placeholder="Password"
          />
          <button className="my-2 p-2 rounded-md bg-red-700 w-full text-white font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white py-4 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? " New to Netflix? Sign Up now"
              : "Already registered Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
