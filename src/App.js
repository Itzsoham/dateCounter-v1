import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  let date = new Date("June 10 2003");

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="steps">
        <button
          onClick={() => {
            if (step > 0) setStep((c) => c - 1);
          }}
        >
          -
        </button>
        Step:{step}
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="steps">
        <button onClick={() => setCount((s) => s - step)}>- </button>
        Count:{count}
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <div className="span">
        <span>
          {" "}
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago`}
        </span>
        <span> {date.toDateString()}</span>
      </div>
    </>
  );
}
