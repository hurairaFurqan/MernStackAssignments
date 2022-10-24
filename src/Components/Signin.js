import axios from "axios";
import React, { useState } from "react";

const BASEURL = "http://localhost:8000/users/signIN";
const Signin = (props) => {
  const [signInData, setSignInData] = useState({});
  const [signIn, setSignIN] = useState(false);
  const [errorRes, setErrorRes] = useState("");
  // const [jwtPayload, setJwtPayload] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data in SignIN state", signInData);
    axios
      .post(BASEURL, signInData)
      .then((response) => {
        //console.log('response: ',response.data);
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setSignIN(true);
          //window.location.href = '/user';
        }
        // setJwtPayload(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorRes(error.response.data);
      });
    //console.log("in jwtPayLoad state", jwtPayload);
  };
  const handleSignUP = () => {
    props.showSignUP(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name={"name"}
          value={signInData.name || ""}
          placeholder={"Enter your name"}
          required
          onChange={(e) => handleChange(e)}
        />

        <input
          type={"password"}
          name={"password"}
          value={signInData.password || ""}
          placeholder={"Enter your password"}
          required
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Log In</button>
      </form>
      <button onClick={handleSignUP}>Click here to SignUp</button>
      {signIn ? (
        <p> you are Logged In</p>
      ) : (
        <p>you are not logged IN due to {errorRes}</p>
      )}
    </>
  );
};

export default Signin;
