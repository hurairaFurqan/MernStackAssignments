import { Button } from "react-bootstrap";
import './Popup.css'

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <Button className="close-btn" onClick={() => props.setTrigger(false)}>Close</Button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
