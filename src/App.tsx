import { useState } from "react";

export default function Lightbulb() {
  const [lightOn, setLightOn] = useState(false);

  const lightup = () => {
    setLightOn((prev) => {
      return !prev;
    });
  };

  if (lightOn) {
    return (
      <div style={{ justifyItems: "center" }}>
        <div
          style={{
            backgroundColor: "yellow",
            border: "solid green 2px",
            height: "50px",
            width: "50px",
            borderRadius: "30px",
          }}
        ></div>
        <button onClick={lightup}>hit the bulb</button>
      </div>
    );
  } else {
    return (
      <div style={{ justifyItems: "center" }}>
        <div
          style={{
            backgroundColor: "white",
            border: "solid green 2px",
            height: "50px",
            width: "50px",
            borderRadius: "30px",
          }}
        ></div>
        <button onClick={lightup}>hit the bulb</button>
      </div>
    );
  }
}
