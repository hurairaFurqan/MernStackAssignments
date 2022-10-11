import moment from "moment";
import React, { useState } from "react";

const ExitToll = (props) => {
  const { entryTollData } = props;
  //console.log(entryTollData);

  const [exitTollData, setexitTollData] = useState({
    interchange: "",
    date: "",
    numberPlate: "",
  });
  const [calCost, setcalCost] = useState(Number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setexitTollData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(exitTollData);
    //props.add(data);
    // console.log(entryTollData.interchange);
    // console.log(exitTollData.date);
    let date = moment(exitTollData.date).format("dddd");
    if (date === "Saturday" || date === "Sunday") {
      let cost = 20;
      cost += 0.2 * 1.5 * 10;
      setexitTollData.cost(cost); // we are going to asssume that every interchange has a distance of 10KM
      //   calCost.cost.toString();
      console.log("on weeekend", exitTollData.cost, date,cost);
    } else {
      let cost2 = 20;
      cost2 += 0.2 * 10;
      setcalCost(cost2); // we are going to asssume that every interchange has a distance of 10KM
      //   calCost.cost.toString();
      console.log("in week day", setcalCost.cost.toString(), date,cost2);
    }
  };

  return (
    <div>
      ExitToll
      <form onSubmit={handleSubmit}>
        <select
          name={"interchange"}
          value={exitTollData.interchange}
          onChange={(e) => handleChange(e)}
        >
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
          value={exitTollData.numberPlate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          type={"date"}
          placeholder={"date"}
          name={"date"}
          required
          value={exitTollData.date}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">Calculate</button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Entry Toll Plaza</th>
            <th>Exit Toll Plaza</th>
            <th>Entry Date</th>
            <th>Exit Date</th>
            <th>Total Cost</th>
          </tr>
          <tr>
            <td>{entryTollData.interchange}</td>
            <td>{exitTollData.interchange}</td>
            <td>{entryTollData.date}</td>
            <td>{exitTollData.date}</td>
            <td>{calCost.cost}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExitToll;
