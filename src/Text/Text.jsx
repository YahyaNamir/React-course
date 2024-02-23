import React, { useState } from "react";
import InText from "./InText";

export default function Text() {
  const [text, setText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setText(!text)}>Show text</button> <br />
      {text && <InText />}
    </div>
  );
}
