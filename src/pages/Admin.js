import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_BASEURL_USERS } from "../context/constants";

const Admin = () => {
  console.log("in Admin component");

  const { user, token } = useContext(AuthContext);
  const [access, setAccess] = useState(false);
  const [errorRes, setErrorRes] = useState("");

  const handleAccess = () => {
    console.log("token", token, "user", user.role);
    if (token && user.role) {
      console.log("in if condit");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log("token in headers of admin js",config.headers.Authorization);
      axios
        .get(`${API_BASEURL_USERS}/admin`, config)
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
      console.log("there is no JWT TOKEN ASSIGNED TO YOU PLEASE LOGIN");
    }
  };
  return (
    <>
      <button onClick={handleAccess} className="btn btn-primary mt-4">
        Check Access Status
      </button>
      {access ? (
        <p>you have access to admin</p>
      ) : (
        <p>Access denied due to {errorRes}</p>
      )}
    </>
  );
};

export default Admin;
