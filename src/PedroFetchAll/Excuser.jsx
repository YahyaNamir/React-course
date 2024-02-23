import axios from "axios";
import { useState } from "react";

export default function Excuser() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (category) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  };

  return (
    <>
      <h2>Generate an excuse</h2>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("funny")}>Funny</button>
      <h4>{excuse}</h4>
    </>
  );
}


