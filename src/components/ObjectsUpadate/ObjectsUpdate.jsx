import { useState } from "react";

function ObjectsUpdate() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mustang",
  });

  const updateCar = (e) => {
    const { name, value } = e.target;
    setCar((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div>
        <h1>Favourite Car Specs</h1>
        <p>Favourite Car: {car.make}</p>
        <p>Car model: {car.model} </p>
        <p>Car Year: {car.year} </p>
      </div>
      <section>
        <input
          type="text"
          name="make"
          id="make"
          value={car.make}
          onChange={(e) => updateCar(e)}
        />
        <input
          type="text"
          name="model"
          id="model"
          value={car.model}
          onChange={(e) => updateCar(e)}
        />
        <input
          type="number"
          name="year"
          id="year"
          value={car.year}
          onChange={(e) => updateCar(e)}
        />
      </section>
    </>
  );
}

export default ObjectsUpdate;
