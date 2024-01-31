import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />
      <p>Name: {name}</p>
      <div>
        <label htmlFor="pickup">
          Pick Up
          <input
            type="radio"
            name="shipping"
            id="pickup"
            value="Pick Up"
            checked={shipping == "Pick Up"}
            onChange={(e) => handleShippingChange(e)}
          />
        </label>
        <label htmlFor="Delivery">
          Delivery
          <input
            type="radio"
            name="shipping"
            id="Delivery"
            value="Delivery"
            checked={shipping == "Delivery"}
            onChange={(e) => handleShippingChange(e)}
          />
        </label>
        <br />
        <p>{shipping}</p>
      </div>
    </div>
  );
}

export default MyComponent;
