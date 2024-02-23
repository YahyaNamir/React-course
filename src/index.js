import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./TodoList/TodoList";
import Form from "./Form/Form";
import Fetch from "./Fetch/Fetch";
import Exercise from "./Exercice/Exercice";
import FormPhoenix from "./FormPhoenix/FormPhoenix";
import Text from "./Text/Text";
import { PedroFetch } from "./PedroFetchAll/PedroFetch";
import YahyaFecth from "./PedroFetchAll/YahyaFecth";
import Excuser from "./PedroFetchAll/Excuser";
import IndiAxios from "./PedroFetchAll/IndiAxios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoList /> */}
    {/* <Form /> */}
    {/* <Fetch/> */}
    {/* <Exercise /> */}
    {/* <FormPhoenix /> */}
    {/* <Text /> */}
    {/* <PedroFetch/> */}
    {/* <YahyaFecth /> */}
    {/* <Excuser/> */}
    <IndiAxios />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
