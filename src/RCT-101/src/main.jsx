import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode, useState } from "react";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="total-items">Items: {props.itemTotal}</span>
    </header>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>
        +
      </button>
      <button className="decrement" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
};

const Item = (props) => {
  return (
    <div className="item">
      <button className="remove-item" onClick={props.removeItem} />
      <span className="item-name">{props.name}</span>
      <Counter />
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([
    {
      name: "Apple",
    },
    {
      name: "Banana",
    },
    {
      name: "Box of Pizza",
    },
    {
      name: "Milk",
    },
  ]);

  const handleItems = (indexToRemove) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div className="grocery-list">
      <Header title="Grocery List" itemTotal={items.length} />

      {/* Grocery List */}
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          removeItem={() => handleItems(index)}
        />
      ))}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
