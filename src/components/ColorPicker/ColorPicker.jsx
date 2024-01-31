import "./ColorPicker.css";
import { useState } from "react";

function ColorPicker() {
  const [color, SetColor] = useState("purple");

  const styles = {
    backgroundColor: color,
  };

  const handleColorChange = (e) => {
    SetColor(e.target.value);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <section className="card" style={styles}>
        <h2>Selected Color: {color}</h2>
      </section>
      <section className="color">
        <label htmlFor="color">Select a color: </label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => handleColorChange(e)}
        />
      </section>
    </div>
  );
}

export default ColorPicker;
