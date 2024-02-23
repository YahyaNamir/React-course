import React, { useState } from "react";

export default function Form() {
  const [info, SetInfo] = useState({
    name: "",
    age: 0,
    email: "",
    address: "",
  });

  const [message, SetMessage] = useState("");

  const handleInfo = (e) => {
    const { name, value } = e.target;
    console.log(name + " : " + value);
    SetInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleMessage = () => {
    SetMessage(
      `Your name is: ${info.name},
       Your age: ${info.age}
       Your email is: ${info.email},
       Your address: ${info.address}`
    );
  };
  return (
    <>
      <h3>Name : </h3> <input onChange={handleInfo} name="name" type="text" />
      <h3>Age : </h3> <input onChange={handleInfo} name="age" type="number" />
      <h3>Email : </h3>{" "}
      <input onChange={handleInfo} name="email" type="email" />
      <h3>Address: </h3>{" "}
      <textarea onChange={handleInfo} name="address"></textarea> <br />
      <button type="submit" onClick={handleMessage}>
        Click
      </button>
      <p>{message}</p>
    </>
  );
}
