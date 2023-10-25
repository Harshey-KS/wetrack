import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
// import { signInWithGoogle } from "../Firebase"
import { signIn } from "../authFirebase";

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
      navigate("/permissions");
    }
  };

  // const [color, changeColor]=useState["#3DA6FC"];

  return (
    // <form className="border-2 border-sky-500" onSubmit={submitForm}>
    //     <p className="form-title">Login</p>
    //     <div className="input-container">
    //         <label htmlFor="username">Email</label>
    //         <input type="email" placeholder="xyz@spit.ac.in" name="username" id="username" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} />
    //     </div>
    //     <div className="input-container">
    //         <label htmlFor="password">Password</label>
    //         <input type="password" placeholder="********" name="password" id="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password}/>
    //     </div>
    //     <div className="forgotDiv">
    //         <a className="forgot">Forgot Password?</a>
    //         {/* <div className='error'>{error}</div> */}
    //     </div>

    //     <div className="submit-box">
    //         {/* <div><button type="submit" className="submit" disabled={isLoading}>Log in</button></div> */}
    //         <div style={{display: "flex", color:"#a19f9f", alignItems:"center"}}>
    //             <hr style={{border: "1px solid #a19f9f", width: "125px", borderRadius: "3px", backgroundColor:"#a19f9f", height: "2px"}}/>
    //             or
    //             <hr style={{border: "1px solid #a19f9f", width: "125px", borderRadius: "3px", backgroundColor:"#a19f9f", height: "2px"}}/>
    //         </div>
    //     </div>
    //     <div className="submit-box">
    //         {/* <button className="submit google" disabled={isLoading} onClick={signInWithGoogle}><i className="fa-brands fa-google fa-1x"></i>   Log in with Google</button> */}
    //     </div>
    //     <div className="userType">
    //         <div className={type=='Committee'?'committee yellow':'committee'} onClick={()=>{setType('Committee')}}>Committee</div>
    //         <div className={type=='Faculty'?'faculty yellow':'faculty'} onClick={()=>{setType('Faculty')}}>Faculty</div>
    //     </div>

    // </form>
    <form className="border-2 border-blue-500 p-4" onSubmit={submitForm}>
      <p className="text-lg font-bold mb-4">Login</p>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="xyz@spit.ac.in"
          name="username"
          id="username"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
          className="border border-gray-300 rounded-md w-full p-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="********"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          value={password}
          className="border border-gray-300 rounded-md w-full p-2 mt-1"
        />
      </div>
      <div className="text-blue-500 mb-4">
        <a className="hover:underline">Forgot Password?</a>
        <div className=" text-red-400">{error}</div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </div>
      <div className="mb-4">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const user = await signIn();
            // console.log(user);
            if (user) {
              if (await login(user.email, user.password)) {
                navigate("/permissions");
              }
            }
          }}
        >
          <i className="fab fa-google fa-1x"></i> Log in with Google
        </button>
      </div>
      {/* <div className="flex justify-between mb-4">
        <div className={`committee ${type === 'Committee' ? 'yellow' : ''}`} onClick={()=>{setType('Committee')}}>Committee</div>
        <div className={`faculty ${type === 'Faculty' ? 'yellow' : ''}`} onClick={()=>{setType('Faculty')}}>Faculty</div>
    </div> */}
    </form>
  );
};

export default Login;
