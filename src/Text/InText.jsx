import { React, useState, useEffect } from "react";

export default function InText() {
  const [intext, setInText] = useState("");
  useEffect(() => {
    console.log("Mounting ++");
    return () => {
      console.log("UnMounting --");
    };
  }, []);
  const handle = (e) => {
    setInText(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handle} />
      <br />
      {intext && <h2>{intext}</h2>}
    </>
  );
}
