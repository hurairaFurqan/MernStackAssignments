import { useContext } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import CartItem from "../Components/CartItem";
import CurrencyFormatter from "../utilities/CurrencyFormatter";
import Items from "../data/items.json";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useContext(AuthContext);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Store Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={4}>
          {cartItems.map((st) => (
            <CartItem key={st.id} {...st}></CartItem>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {CurrencyFormatter(
              cartItems.reduce((total, cartItem) => {
                const item = Items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
