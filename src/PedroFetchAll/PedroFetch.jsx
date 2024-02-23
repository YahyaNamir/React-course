import React, { useEffect, useState } from "react";
import axios from "axios";

export const PedroFetch = () => {
  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  const [catFact, setCatFact] = useState("");

  const fetchCat = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <div className="App">
      <button onClick={fetchCat}>Generate a Cat Fact 🐈</button>
      <p>{catFact}</p>
    </div>
  );
};
