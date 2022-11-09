import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/Counter";
import Signin from './Components/Signin'
function App() {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  console.log("inital State value in app.js", count);

  // dispatch(decrement);
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decrement())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={count}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(increment())}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
      <Signin></Signin>
    </>
  );
}

export default App;
