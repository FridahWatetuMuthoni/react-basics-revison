import { useState, useEffect } from "react";

function SideComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Add</button>
    </>
  );
}

export default SideComponent;
