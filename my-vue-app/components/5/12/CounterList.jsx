import { useState } from "react";

const CounterList = () => {
  const [list, setlist] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setlist;
        }}
      ></button>
    </div>
  );
};
export default CounterList;
