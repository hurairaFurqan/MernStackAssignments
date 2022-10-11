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
  };
  return (
    <div>
      EntryToll
      <form onSubmit={handleSubmit}>
        <select name={"interchange"} value={data.interchange} onChange={(e) => handleChange(e)}>
          <option value="Sargodha">Sargodha</option>
          <option value="Sahiwal">Sahiwal</option>
          <option defaultValue="Lahore">Lahore</option>
          <option value="Isalamabad">Isalamabad</option>
        </select>

        <input
          placeholder="Number-Plate"
          name={"numberPlate"}
          type={"text"}
          value={data.numberPlate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          type={"date"}
          placeholder={"date"}
          name={"date"}
          value={data.date}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EntryToll;
