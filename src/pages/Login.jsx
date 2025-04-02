import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typed from "typed.js";
import UserContext from "../context/UserContext";

const Login = () => {
  let userStore = useContext(UserContext);
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate(); // ✅ Add this

  let arr = JSON.parse(localStorage.getItem("Ecom")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    let find = arr.find((ele) => ele.email === obj.email);

    if (find) {
      if (find.password === obj.password) {
        localStorage.setItem(
          "Login",
          JSON.stringify({ email: obj.email, login: true })
        );
        userStore.setuser({ email: obj.email, login: true });
        navigate("/"); // ✅ Now it will redirect to Home Page
      } else {
        return alert("Wrong password");
      }
    } else {
      return alert("User not found");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg px-8 py-6 max-w-sm w-full">
        <h3 className="text-2xl font-bold mb-4 text-center">Login</h3>

        <label className="block text-gray-700">Email</label>
        <input
          ref={emailRef}
          className="border px-3 py-2 rounded w-full mb-3"
          type="text"
        />

        <label className="block text-gray-700">Password</label>
        <input
          ref={passwordRef}
          className="border px-3 py-2 rounded w-full mb-4"
          type="password"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 w-full text-white px-3 py-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link className="text-blue-500" to={"/signup"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
