import { useContext } from "react";
import { Stack, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import Items from "../data/items.json";
import CurrencyFormatter from "../utilities/CurrencyFormatter";
const CartItem = ({ id, quantity }) => {
  const { removeCartItem } = useContext(AuthContext);

  const item = Items.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ objectFit: "cover", width: "150px", height: "75px" }}
      ></img>

      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".65rem" }}>
          {CurrencyFormatter(item.price)}
        </div>
      </div>
      <div className="text-muted">
        {CurrencyFormatter(item.price * quantity)}
      </div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeCartItem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
