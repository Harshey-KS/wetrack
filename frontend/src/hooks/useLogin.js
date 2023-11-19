import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password, isOauth) => {
    setIsLoading(true);
    setError(null);

    // console.log(email, password); //post request to login
    const response = await axios
      .post("teachers/login", {
        email,
        password,
        isOauth
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response.data);
        setError(error.response.data.error || error.response.data);
        setTimeout(() => {
          setError(null);
        }, 2000);
      });
    const json = await response.data;
    // console.log(json);
    localStorage.setItem("profile", JSON.stringify(json));
    dispatch({ type: "LOGIN", payload: json });

    setIsLoading(false);
    return true;
  };

  return { login, isLoading, error };
};
export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const register = async ({ email, password, username, name, pfp }) => {
    setIsLoading(true);
    setError(null);

    const response = await axios.post("auth/register", {
      email,
      password,
      username,
      name,
      pfp,
    });
    const json = await response.data;
    console.log(json);

    localStorage.setItem("profile", JSON.stringify(json));
    dispatch({ type: "LOGIN", payload: json });

    setIsLoading(false);
    return true;
    // }
  };

  return { register, isLoading, error };
};
