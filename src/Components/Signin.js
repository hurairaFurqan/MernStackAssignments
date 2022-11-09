import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignin } from "../Services";

const Signin = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.signIn);

  console.log('user in Signin Component', user);
  const [signIn, setSignIn] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signIn);
    dispatch(
      getSignin(signIn)
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-4"
          type={"email"}
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
        />

        <input
          className="form-control mb-4"
          tyoe={"password"}
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </>
  );
};

export default Signin;
