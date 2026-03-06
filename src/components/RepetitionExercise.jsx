import { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-1</button>
    </div>
  );
}

export default RepetitionExercise;