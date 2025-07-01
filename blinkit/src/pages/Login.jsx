import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    // console.log(email, pass);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const verifyUser = users.find(
      (user) => user.UserEmail === email && user.UserPass === pass
    );

    if (verifyUser) {
      toast.success("Successfully Login 😍");
      navigate("/home");
    } else {
      toast.error("Invalid Credentials 😌");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl text-center font-bold text-green-500">Login</h2>
        <form action="" onSubmit={handleForm}>
          <div className="mb-4">
            <label htmlFor="" className="block mb-1 font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              name=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email..."
              id=""
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-1 font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              name=""
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Enter your password..."
              id=""
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 ">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an acccount{" "}
          <Link to={"/reg"} className="text-green-600 font-semibold">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
