import React from "react";
import { useState } from "react";

function Toggle() {

  const [isOff, setIsOff] = useState(true);

  const handleToggle = (e) => {
    setIsOff((isOff) => !isOff)
  }

  const buttonColor = isOff ? "white" : "red";

  return (
    <button style={{background: buttonColor}} onClick={handleToggle}>
      {isOff ? "OFF" : "ON"}
    </button>
  )
}

export default Toggle;
