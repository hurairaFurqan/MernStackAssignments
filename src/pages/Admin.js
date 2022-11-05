import axios from "axios";

import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Popup from "../utilities/Popup";
import StoreItems from "../Components/StoreItems";
import { AuthContext } from "../context/AuthContext";
import { API_BASEURL_PRODUCT, API_BASEURL_USERS } from "../data/constants";

const Admin = () => {
  const { products } = useContext(AuthContext);
  console.log("in Admin component", products);

  const { user, token } = useContext(AuthContext);
  const [access, setAccess] = useState(false);
  const [errorRes, setErrorRes] = useState("");
  const [product, setproduct] = useState({});
  const [trigger, setTrigger] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setproduct((values) => ({ ...values, [name]: file }));
  };

  const handleAccess = () => {
    console.log("token", token, "user", user.role);
    if (token && user.role) {
      console.log("in if condit");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log("token in headers of admin js", config.headers.Authorization);
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
      console.log("there is no JWT TOKEN OR USER IN USESTATE");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("use state data", product);

    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("productName", product.productName);
    data.append("productPrice", product.productPrice);
    data.append("singleImage", imagedata);
    axios
      .post(`${API_BASEURL_PRODUCT}/`, data)
      .then((res) => {
        console.log(res.data);
        setTrigger(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
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

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column container justify-content-start">
          <div className="form-outline mb-4 mt-2">
            <input
              type={"text"}
              name={"productName"}
              value={product.productName || ""}
              placeholder={"Enter Product Name"}
              required
              id="inputName"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-outline mb-4 mt-2">
            <input
              type={"number"}
              name={"productPrice"}
              value={product.productPrice || ""}
              placeholder={"Enter Product Price"}
              required
              id="inputPrice"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              id="formFile"
              required
              name={"singleImage"}
              onChange={(e) => handleImage(e)}
            ></input>
          </div>
          <div className="d-flex justify-content-start">
            <Button className="mt-4" type="submit">
              Create Product
            </Button>
          </div>
        </div>
      </form>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        <h2>Auth Store</h2>
        <p>Product Information saved Successfully</p>
        <p>Redirecting you to Store</p>
      </Popup>
    </>
  );
};

export default Admin;
