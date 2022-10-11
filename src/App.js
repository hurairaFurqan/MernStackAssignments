import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import EntryToll from "./pages/EntryToll";
import ExitToll from "./pages/ExitToll";
import { useState } from "react";
function App() {
  const [data,setData] = useState({});
  const add = (state) => {
    setData(state);
    //console.log(data);
  }
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<EntryToll add = {add}></EntryToll>}/>
        <Route path="exitToll" element={<ExitToll data = {data}></ExitToll>}></Route>
      </Routes>
    </div>
  );
}

export default App;
