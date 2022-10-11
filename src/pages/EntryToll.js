import React, { useState } from "react";

const EntryToll = (props) => {
  const [data, setData] = useState({interchange:"",date:"",numberPlate:""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(data);
    props.add(data);
    alert("Information saved. Click on exit toll ");    
  };
  return (
    <div>
      EntryToll
      <form onSubmit={handleSubmit}>
        <select name={"interchange"} required value={data.interchange} onChange={(e) => handleChange(e) }> 
          <option value="Sargodha">Sargodha</option>
          <option value="Sahiwal">Sahiwal</option>
          <option defaultValue="Lahore">Lahore</option>
          <option value="Isalamabad">Isalamabad</option>
        </select>

        <input
          placeholder="LLL-NNNN"
          name={"numberPlate"}
          type={"text"}
          required
          value={data.numberPlate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          type={"date"}
          placeholder={"date"}
          name={"date"}
          required
          value={data.date}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EntryToll;
