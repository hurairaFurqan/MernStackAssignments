import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_BASEURL_USERS } from "../data/constants";

const User = () => {
  console.log("in User component");

  const { user, token } = useContext(AuthContext);
  const [access, setAccess] = useState(false);
  const [pinCode, setPinCode] = useState("");
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
    } else {
      alert("there is no JWT TOKEN ASSIGNED TO YOU PLEASE LOGIN");
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((response) => {
          console.log(response.data[0]);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [pinCode]);

  return (
    <>
      <button onClick={handleAccess} className="btn btn-primary mt-4">
        Check Access Status
      </button>

      {access ? (
        <p>you have access to user profile</p>
      ) : (
        <p>Access denied due to {errorRes}</p>
      )}

      <div className="app">
        <input
          placeholder="Search Input.."
          onChange={(event) => setPinCode(event.target.value)}
        />
      </div>
    </>
  );
};

export default User;
