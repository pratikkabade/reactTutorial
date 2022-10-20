import { useState } from "react";

function StateOne() {
  // NUMBER
  let [number, setNumber] = useState(0)

  const increaseNum = () => {
    setNumber(number + 1)
  }


  // CASE
  let [text, setText] = useState('')

  const changeText = (e) => {
    setText(e.target.value.toUpperCase())
  }


  //VISIBILITY
  let [show, setShow] = useState(true)

  const hideShow = () => {
    setShow(!show)
  }


  //COLOR
  let [color, setColor] = useState('black')

  const colorChange = () => {
    setColor(color === 'red' ? 'black' : 'red')
  }


  return (
    <div>
      <p>{number}</p>
      <button onClick={increaseNum}>Increase</button>

      <p>Capital Letters here ..</p>
      <input type="text" onChange={changeText} value={text} />

      {show ? <p>This is the field</p> : <p></p>}
      <button onClick={hideShow}>Hide/Show</button>

      <p style={{ color: color }}>Colored</p>
      <button onClick={colorChange}>Change Color</button>
    </div>
  );
}

export default StateOne;
