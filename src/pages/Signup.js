import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_BASEURL_AUTH } from "../data/constants";
const Signup = (props) => {
  console.log("in Sign Up component");

  let navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(signUpData);

    await axios
      .post(`${API_BASEURL_AUTH}/signup`, signUpData)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignUP = () => {
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4 container">
          <input
            type={"text"}
            name={"name"}
            value={signUpData.name || ""}
            className="form-control"
            placeholder={"Enter your name"}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-outline mb-4 container">
          <input
            type={"email"}
            name={"email"}
            value={signUpData.email || ""}
            className="form-control"
            placeholder={"Enter your email"}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-outline mb-4 container">
          <input
            type={"password"}
            name={"password"}
            className="form-control"
            value={signUpData.password || ""}
            placeholder={"Enter your password"}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="container mb-4">
          <select
            name={"role"}
            required
            className="form-select"
            value={signUpData.role || ""}
            onChange={(e) => handleChange(e)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-4 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mx-4">
            Sign UP
          </button>
          <Button onClick={handleSignUP} variant = "outline-primary" >
            Click here to Signin
          </Button>
        </div>
      </form>
    </>
  );
};

export default Signup;
