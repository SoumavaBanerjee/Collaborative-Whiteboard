import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";

function App() {
  // color and lineWidth are properties of react sketch whiteboard
  const [color, setColor] = useState({});
  const [lineWidth, setLineWidth] = useState(3);

  return (
    <div>
      <Navbar color={color} setColor={setColor} setLineWidth={setLineWidth} />
      <Body color={color} setColor={setColor} lineWidth={lineWidth} />
    </div>
  );
}

export default App;
