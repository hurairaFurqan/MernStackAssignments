import axios from "axios";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { API_BASEURL_AUTH } from "../data/constants";

const Signin = (props) => {
  // console.log('in Sign In component');
  let navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [signInData, setSignInData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data in SignIN state", signInData);
    axios
      .post(`${API_BASEURL_AUTH}/signin`, signInData)
      .then((response) => {
        const {token, user} = response.data;
        if (token && user) {
          login(token, user);
          console.log(response.data);
        }
        if(user.role === 'admin'){
          navigate('/admin')
        }else{
          navigate("/user")
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleSignUP = () => {
    navigate("/signUp");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4 container mt-2">
          <input
            type={"email"}
            name={"email"}
            value={signInData.email || ""}
            placeholder={"Enter your email"}
            required
            id="inputEmail"
            className="form-control"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-outline mb-4 container">
          <input
            type={"password"}
            name={"password"}
            className="form-control"
            value={signInData.password || ""}
            placeholder={"Enter your password"}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mx-4">
              Log In
            </button>
            <Button onClick={handleSignUP}  variant = "outline-primary">
              Click here to SignUp
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
