import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Name");

  let onChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder='enter something...' onChange={onChange} />
      {inputValue}
      <input value={inputValue} onChange={onChange} />
    </div>
  );
};

export default StateTutorial;
