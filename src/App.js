import { useState } from "react";
import "./App.css";

function App() {
  // const [age, setAge] = useState(0);
  // const [name, setName] = useState("Yahya");
  // const [InputValue, setInputValue] = useState("");
  // const [HideShow, setHideShow] = useState(true);
  // const [TextColor, setTextColor] = useState("blue");
  const [count, setCount] = useState(0);

  // function IncrementAge(){
  //   setAge(age + 2);
  // }

  // const changeName = () => {
  //   setName(name + "a");
  // }

  // const OutValue = (event) => {
  //   setInputValue(event.target.value)
  // }

  // const ShowAndHide = () => {
  //   setHideShow(!HideShow);
  //   setTextColor(TextColor === "blue" ? "red" : "blue");
  // };

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };
  const SetToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {/* <User name="yahya" age={19} />
      <User name="adam" age={18} />
      <User name="soufiane" age={12} /> */}
      {/* <Names /> */}
      {/* <h1>
        {age} <br />
        <button onClick={IncrementAge}>+1</button>
      </h1>
      <h1>
        {name} <br />
        <button onClick={changeName}>+1</button>
      </h1> */}
      {/* <input type="text" onChange={OutValue}/><br/>
      {InputValue} */}
      {/* <button onClick={ShowAndHide}>Hide / show</button>
      {HideShow && <h1 style={{color : TextColor}} >Hey i'm Yahya</h1>} */}
      <button onClick={Increase}>Plus(+)</button>
      <button onClick={Decrease}>Minus(-)</button>
      <button onClick={SetToZero}>SET 0</button> <br />
      {count}
    </div>
  );
}

// const Names = () => {
//   let nameArr = ["Yahya", "Adam", "Soufiane", "Khalil", "Hami"];
//   const nameObj = [
//     { name: "Yahya", age: 20 },
//     { name: "Adam", age: 19 },
//     { name: "Soufiane", age: 22 },
//   ];
//   return (
//     <>
//       <h1>
//         {nameArr.map((names, index) => (
//           <div>
//             {index} {names} {names.toUpperCase()} <br/><br/>
//           </div>
//         ))}
//       </h1>
//       <h1>{nameArr.map((value, key) => (<span key={key}> {key} : {value} <br/> </span>))} </h1>

//       <h1>
//         {nameObj.map((user, key ) => (
//           <span key={key}>
//             Name : {user.name}, Age : {user.age}
//             <br />
//           </span>
//         ))}
//       </h1>
//     </>
//   );
// };

// const User = (props) => {
//   const [isGreen, setIsGreen] = useState(true);
//   let statusInfo = props.age >= 18 ? "OVER 18" : "UNDER 18";

//   const toggleColor = () => {
//     setIsGreen((prev) => !prev);
//   };
//   return (
//     <>
//       <h1 className={info}>{props.name}</h1>
//       <h2 className={info}>{props.age} yO</h2>
//       <h3 style={{ color: isGreen ? "green" : "red" }}>{statusInfo}</h3>
//       {<button onClick={toggleColor}>Change</button>}
//     </>
//   );
// };

export default App;
