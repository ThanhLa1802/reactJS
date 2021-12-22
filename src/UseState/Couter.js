import { useState } from "react";

const prices = [100, 200, 300]
const Counter = () => {
  const [counter, setCounter] = useState(() => {
    const order = prices.reduce((total, curr) => total + curr)
    return order 
  });
  const handleCounterClicked = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterClicked}>Update Counter</button>
    </div>
  )
}

export default Counter;