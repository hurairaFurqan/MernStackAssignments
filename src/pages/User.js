import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_BASEURL_USERS } from "../context/constants";

const User = () => {
  console.log('in User component');

  const {user, token} = useContext(AuthContext)
  const [access, setAccess] = useState(false);
  const [errorRes, setErrorRes] = useState("");
  const handleAccess = () => {
    console.log("in log function");
    if (user) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          role: user.role,
        },
      };

      axios
        .get(`${API_BASEURL_USERS}/user`, config)
        .then((res) => {
          console.log("res.status: ", res);
          setAccess(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          setAccess(false);
          setErrorRes(error.response.data);
        });
    }
    else{
        alert("there is no JWT TOKEN ASSIGNED TO YOU PLEASE LOGIN");
    }
  };

  const handleLogout = () => {
    
    
    localStorage.removeItem("user");
    alert("you are logged out");
  };
  return (
    <>
      <button onClick={handleAccess} className='btn btn-primary mt-4'>Check Access Status</button>

      {access ? (
        <p>you have access to user profile</p>
      ) : (
        <p>Access denied due to {errorRes}</p>
      )}

      <button onClick={handleLogout} className='btn btn-secondary' >Logout</button>
    </>
  );
};

export default User;
