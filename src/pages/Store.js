import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json"

const Store = () => {
  return (
    <div>
      {storeItems.map((st) => (
        <li>{st.name}</li>
      ))}
      {/* <Row>
        {storeItems.map(st => {
          
            <Col>{JSON.stringify(st)}</Col>
            // <Col>{st.name}</Col>

            // <Col>{st.price}</Col>
            // <Col>{st.imgUrl}</Col>
          
        })}
      </Row> */}
    </div>
  );
};

export default Store;
