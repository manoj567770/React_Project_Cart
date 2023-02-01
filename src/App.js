import React, { useState } from "react";
import Header from "./components/layout/Header";
import Products from "./components/Products/Products";
import SubHeader from "./components/layout/SubHeader";
const App = () => {
  const [cartItems, setcartItems] = useState(0);

  const handleAddItems = () => {
    setcartItems(cartItems + 1);
  };

  const handleRemoveItems = () => {
    setcartItems(cartItems - 1);
  };
  return (
    <div>
      <Header count={cartItems} />
      <SubHeader />
      <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} />
    </div>
  );
};

export default App;
