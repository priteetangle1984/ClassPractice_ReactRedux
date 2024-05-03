import { useRef, useState } from "react";

export default function Counter() {
  const ref = useRef(0);
  const [divFive, setDivFive] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
    // add the following in to demonstrate the difference betwene state and ref
    if (ref.current % 5 === 0) {
      setDivFive(ref.current / 5);
    }
  }

  // start with just an alert that shows useRef counting up
  return (
    <>
      <button onClick={handleClick}>Click me!</button>

      <p>ref count is: {ref.current}</p>
      <p>div 5 count (which is state) is: {divFive}</p>
    </>
  );
}
