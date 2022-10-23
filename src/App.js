import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Layout from "./pages/Layout";
import User from "./pages/User";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

// const BASEURL = "http://localhost:8000/users";
function App() {
  // const getData = () => {
  //   axios.get(BASEURL).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  const [showSignuUp, setSignUp] = useState(false);


  const showSignUP = (boolValue) => {
    setSignUp(boolValue);
  }

  return (
    <div className="App">
      {showSignuUp === true ? <Signup showSignUP = {showSignUP}/> : <Signin showSignUP = {showSignUP}/>}

      <Layout />
      <Routes>
        <Route path="/" element={<Admin></Admin>}></Route>
        <Route path="/user" element={<User></User>}></Route>
      </Routes>
    </div>
  );
}

export default App;
