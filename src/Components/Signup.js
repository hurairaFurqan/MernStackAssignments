import axios from "axios";
import React, { useState } from "react";

const BASEURL = "http://localhost:8000/users/signUP";
const Signup = (props) => {
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(signUpData);

    await axios.post(BASEURL, signUpData).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    });
  }
  const handleSignUP = () => {
    props.showSignUP(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name={"name"}
          value={signUpData.name}
          placeholder={"Enter your name"}
          required
          onChange={(e) => handleChange(e)}
        />

        <input
          type={"password"}
          name={"password"}
          value={signUpData.password}
          placeholder={"Enter your password"}
          required
          onChange={(e) => handleChange(e)}
        />

        <select
          name={"role"}
          required
          value={signUpData.role}
          onChange={(e) => handleChange(e)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Sign UP</button>
      </form>
      <button onClick={handleSignUP}>Click here to Signin</button>
    </>
  );
};

export default Signup;
