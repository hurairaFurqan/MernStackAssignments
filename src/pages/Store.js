import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import Sitems from "../Components/Sitems";
const Store = () => {
  return (
    <div>
      <Row className="g-3 " md={2} xs={1} lg={4}>
        {storeItems.map((st) => (
          <Col key={st.id}>
            <Sitems {...st}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
