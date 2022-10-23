import axios from "axios";
import React, { useState } from "react";

const BASEURL = "http://localhost:8000/users/singIN";
const Signin = (props) => {
  const [signInData, setSignInData] = useState({});

  const [jwtPayload, setJwtPayload] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data in SignIN state", signInData);
    axios.post(BASEURL, signInData).then((response) => {
      //console.log('response: ',response.data.name,response.data.role);
      if (response.data.access_token) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.access_token)
        );
        
      }
    });

    console.log(jwtPayload);
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
          value={signInData.name}
          placeholder={"Enter your name"}
          required
          onChange={(e) => handleChange(e)}
        />

        <input
          type={"password"}
          name={"password"}
          value={signInData.password}
          placeholder={"Enter your password"}
          required
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Log In</button>
      </form>
      <button onClick={handleSignUP}>Click here to SignUp</button>
    </>
  );
};

export default Signin;
