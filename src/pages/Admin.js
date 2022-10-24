import axios from "axios";
import React, { useState } from "react";

const Admin = (props) => {
  const [access, setAccess] = useState(false);
  const [errorRes, setErrorRes] = useState("");
  const handleAccess = () => {
    console.log("in log function");
    const user = JSON.parse(localStorage.getItem("user"));
    //console.log(user);
    if (user && user.access_token) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          role: user.role,
        },
      };

      axios
        .get("http://localhost:8000/users/admin", config)
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
        alert("there is no JWT TOKEN ASSIGNED TO YOU PLEASE LOGIN")
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("you are logged out")
  };
  //   useEffect(() => {});
  return (
    <>
      <button onClick={handleAccess}>Check Access Status</button>

      {access ? (
        <p>you have access to admin</p>
      ) : (
        <p>Access denied due to {errorRes}</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Admin;
