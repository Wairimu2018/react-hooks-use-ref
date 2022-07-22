import React, { useRef } from "react";

function CounterRef() {
  const count = useRef(0);

  function handleClick() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default CounterRef;
