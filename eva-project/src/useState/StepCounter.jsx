import { useState } from "react";

export const StepCounter = () => {
const [stepCount, setStepCount] = useState(0);

  const addStep = () => {
setStepCount((prevState) => prevState + 1);

  };

  return (
    <>
      <div>You tock {stepCount} steps today</div>
      <button onClick={addStep}>Add 1 step</button>
    <button onClick={() => {
        addStep();
        addStep();
        addStep();
        addStep();
        addStep();
    }}>Add 5 steps</button>
    </>
  );
};
