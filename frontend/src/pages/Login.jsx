import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
// import { signInWithGoogle } from "../Firebase"
import { signIn } from "../authFirebase";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Committee");
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();

  const handleGoogleAuth = async (e) => {
    e.preventDefault();
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if (await login(email, password)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-between mx-8 gap-4">
      <img
        src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-1592.jpg"
        alt=""
        className="rounded-full h-96 w-96 mt-12 ml-16 mb-4 "
      />
      <form
        className="bg-white rounded-xl w-1/2 m-2 mt-10 -ml-6  h-4/5 pt-2 overflow-hidden px-2 shadowBig"
        onSubmit={submitForm}
      >
        <p className="text-lg font-semibold">Welcome To</p>
        <p className="text-2xl font-extrabold text-[#547AFF] -mt-2.5">
          WeTrack
        </p>

        <div className=" mt-4  flex flex-col justify-center items-center">
          <div className="flex">
            <MdOutlineEmail className="mt-0.5 h-5 w-5 text-gray-400 mr-1" />
            <label
              htmlFor="username"
              className="block text-gray-400 font-medium"
            >
              Email
            </label>
          </div>
          <input
            type="email"
            placeholder="xyz@spit.ac.in"
            name="username"
            id="username"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            value={email}
            className="border border-gray-300 rounded-md p-2 w-4/5"
          />
        </div>
        <div className=" mt-4  flex flex-col justify-center items-center">
          <div className="flex">
            <RiLockPasswordFill className="mt- h-5 w-5 text-gray-400 mr-1" />
            <label
              htmlFor="password"
              className="block text-gray-400 font-medium"
            >
              Password
            </label>
          </div>
          <input
            type="password"
            placeholder="********"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            value={password}
            className="border border-gray-300 rounded-md p-2 mt-1 w-2/3"
          />
        </div>
        <div className="text-blue-500 text-sm mb-4 flex justify-center items-center ml-4">
          <a className="hover:underline">Forgot Password?</a>
          <div className=" text-red-400">{error}</div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#5932EA] shadowBig hover:bg-gray-400 hover:text-gray-600 text-white font-bold py-2 mb-6 px-8 ml-3.5 duration-300 rounded-lg text-sm"
          >
            LOGIN
          </button>
          <div className="w-full flex font-medium justify-between">
            <hr className="w-1/2 h-[1px] bg-gray-300" />
            <div className="-mt-3 mx-2 text-sm font-medium text-gray-500 ">
              OR
            </div>
            <hr className="w-1/2 h-[1px] bg-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-slate-100 hover:bg-slate-300 text-gray-500 font-bold py-2 px-8 text-sm rounded-lg shadowBig ml-2 duration-200"
            onClick={async () => {
              const user = await signIn();
              // console.log(user);
              if (user) {
                if (await login(user.email, user.password, true)) {
                  navigate("/dashboard");
                }
              }
            }}
          >
            <div className="flex">
              <img
                src="https://i.stack.imgur.com/22WR2m.png"
                alt=""
                className="rounded-full h-5 w-5 mt-0.5 mr-2 "
              />{" "}
              <p>LOGIN WITH GOOGLE</p>
            </div>
          </button>
        </div>
        {/* <div className="w-full h-12 bg-[#5932EA] mt-8 flex justify-around">
        <div className="mt-2 text-white font-bold   border-r-white-4">
          FACULTY
        </div>
        <div className="mt-2 text-white font-bold ">HOD</div>
      </div> */}
      </form>
    </div>
  );
};

export default Login;
