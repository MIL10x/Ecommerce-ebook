import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  var email = "miltonvinciline88@gmail.com";
  const [userdetails, setuserdetails] = useState([]);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const NameRef = useRef();
  const navigate = useNavigate();

  const userdetail = async () => {
    const user = await fetch(`${API_KEY}/register`);
    const userdetail = await user.json();
    const userrequire = userdetail.filter((obj) => obj.email === email);
    setuserdetails(userrequire);
    console.log(userrequire);
  };

  const validateInputs = async () => {
    const authdetail = {
      Name: NameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    let NameValid = !!authdetail.Name;
    let emailValid = !!authdetail.email;
    let passwordValid = !!authdetail.password;
    setIsNameValid(NameValid);
    setIsPasswordValid(passwordValid);
    setIsEmailValid(emailValid);
    const responseft = await fetch(`${API_KEY}/register`);
    const dataft = await responseft.json();
    const fltft = dataft.some((data) => data.email === authdetail.email);
    if (fltft) {
      toast.error("Your are already  logged in");
    } else {
      const response = await fetch(`${API_KEY}/register`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authdetail),
      });
      const data = await response.json();
      console.log(data);
      if (NameValid && emailValid && passwordValid) {
        sessionStorage.setItem("email", JSON.stringify(authdetail.email));
        navigate("/login");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl w-full text-center underline font-semibold">
        Register
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateInputs();
        }}
      >
        <div className="flex flex-col gap-2 mt-5">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Name"
            ref={NameRef}
            className={`p-3 w-full outline-none rounded-xl border-2 ${
              isNameValid ? "" : "border-red-500"
            }`}
          />
          {!isNameValid && (
            <p className="text-red-600 text-sm">Please enter a name</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="email">Your Eamil</label>
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
            <p className="text-red-600 text-sm">Please enter valid email</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            ref={passwordRef}
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
            Register
          </button>
        </div>
        <Link to={"/login"} className="text-xl w-full flex mt-5 justify-center">
          Do you have account&nbsp;
          <span className="text-blue-600 hover:underline text-xl">Login</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
