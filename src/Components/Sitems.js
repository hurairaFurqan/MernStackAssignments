import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import CurrencyFormatter from "../utilities/CurrencyFormatter";

const Sitems = ({ id, name, price, imgUrl }) => {
  const { getCartItems, increaseCartItem, decreaseCartItem, removeCartItem } =
    useContext(AuthContext);
  const quantity = getCartItems(id);
  console.log(quantity);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="150px"
        style={{ objectFit: "cover" }}
      ></Card.Img>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-content-baseline mb-4">
          <span>{name}</span>
          <span className="text-muted">{CurrencyFormatter(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartItem(id)}>
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseCartItem(id)}>+</Button>
                <div>
                  <span className="sp-3">{quantity} in cart</span>
                </div>
                <Button onClick={() => decreaseCartItem(id)}>-</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeCartItem(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Sitems;
