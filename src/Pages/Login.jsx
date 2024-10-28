import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import usetitle from "../hooks/usetitle";

const Login = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  usetitle("Login-page");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const validateInputs = async () => {
    const authdetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    let emailValid = !!authdetail.email;
    let passwordValid = !!authdetail.password;
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
    const responseft = await fetch(`${API_KEY}/register`);
    const dataft = await responseft.json();
    const fltft = dataft.some((data) => data.email === authdetail.email);
    const fltft2 = dataft.some((data) => data.password === authdetail.password);
    if (fltft && fltft2) {
      if (emailValid && passwordValid) {
        sessionStorage.setItem("email", JSON.stringify(authdetail.email));
        navigate("/");
      }
    } else if (fltft === true && fltft2 === false) {
      toast.error("wrong password");
    } else {
      toast.error(
        "please reregister your account. Your account is not available."
      );
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl w-full text-center underline font-semibold">
        Login
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateInputs();
        }}
      >
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            id="email"
            placeholder="miltonvinciline08@gmail.com"
            ref={emailRef}
            className={`p-3 w-full outline-none rounded-xl border-2 ${
              isEmailValid ? "" : "border-red-500"
            }`}
          />
          {!isEmailValid && (
            <p className="text-red-600 text-sm">
              Please enter a valid Email Id
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="password">Your password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className={`p-3 w-full outline-none rounded-xl border-2 ${
              isPasswordValid ? "" : "border-red-500"
            }`}
          />
          {!isPasswordValid && (
            <p className="text-red-600 text-sm">Please enter a password</p>
          )}
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 px-4 mt-3 rounded-xl"
          >
            Log In
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white p-2 px-4 mt-3 rounded-xl"
          >
            Login As Guest
          </button>
        </div>
        <Link
          to={"/register"}
          className="text-blue-600 hover:underline text-xl w-full flex mt-5 justify-center"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
