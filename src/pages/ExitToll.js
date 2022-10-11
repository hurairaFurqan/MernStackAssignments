import React, { useState } from 'react'

const ExitToll = (props) => {
    const {entryTollData} = props;
    //console.log(entryTollData);

    const[exitTollData, setexitTollData] = useState({interchange:"",date:"",numberPlate:""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setexitTollData(values => ({ ...values, [name]: value }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(exitTollData);
        //props.add(data);
      };

  return (
    <div>
        ExitToll
        <form onSubmit={handleSubmit}>
        <select name={"interchange"} value={exitTollData.interchange} onChange={(e) => handleChange(e)}>
          <option value="Sargodha">Sargodha</option>
          <option value="Sahiwal">Sahiwal</option>
          <option defaultValue="Lahore">Lahore</option>
          <option value="Isalamabad">Isalamabad</option>
        </select>

        <input
          placeholder="Number-Plate"
          name={"numberPlate"}
          type={"text"}
          value={exitTollData.numberPlate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          type={"date"}
          placeholder={"date"}
          name={"date"}
          value={exitTollData.date}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">Calculate</button>
      </form>
        </div>
  )
}


export default ExitToll
