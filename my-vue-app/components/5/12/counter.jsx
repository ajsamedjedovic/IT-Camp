import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("counter Clicker  ", count);
        }}
      ></button>
    </div>
  );
};
