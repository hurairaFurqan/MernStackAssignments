import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Layout from "./Components/Layout";
import User from "./pages/User";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

import loader from "./loader.gif";
import Store from "./pages/Store";

function App() {
  const { token, user } = useContext(AuthContext);
  // console.log(token, user);
  console.log("app.js");
  return (
    <div className="App">
      <Layout />

      {token ? (
        user ? (
          <Routes>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/store" element={<Store></Store>}></Route>
            <Route path="/logout" element={<Logout></Logout>}></Route>
          </Routes>
        ) : (
          <img src={loader}></img>
        )
      ) : (
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/signUp" element={<Signup></Signup>}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
