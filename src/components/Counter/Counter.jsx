import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count) => {
      return (count += 1);
    });
  };
  const handleDecrese = () => {
    setCount((count) => {
      return (count -= 1);
    });
  };

  const handleReset = () => {
    setCount((count) => {
      count = 0;
      return count;
    });
  };

  return (
    <section className="counter">
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleIncrease} className="btn increase">
          Increase
        </button>
        <button onClick={handleReset} className="btn reset">
          Reset
        </button>
        <button onClick={handleDecrese} className="btn decrease">
          Decrease
        </button>
      </div>
    </section>
  );
}

export default Counter;
