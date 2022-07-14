import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data1, setData1] = useState("");
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData1(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data1}</h1>
      <h1>{count1}</h1>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}>
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
